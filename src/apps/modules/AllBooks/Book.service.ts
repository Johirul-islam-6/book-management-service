import { SortOrder } from 'mongoose';
import { HelperPagination } from '../../../helpers/paginationHelper';
import { IGenaricRespons } from '../../../interfaces/common';
import { IPaginationOpton } from '../../../interfaces/pagination';
import { academicSemesterSearchableFields } from './Book.constants';
import { IBookLishtFilters, IBookList } from './Book.interface';
import { BookLishModel } from './Book.model';

const createBook = async (payload: IBookList): Promise<IBookList | null> => {
  const result = await BookLishModel.create(payload);
  return result;
};

// update a book

const updateBook = async (
  semesterId: string,
  payload: Partial<IBookList>
): Promise<IBookList | null> => {
  // const id = { _id : semesterId};
  // checking semester final title and code

  const result = await BookLishModel.findOneAndUpdate(
    { _id: semesterId },
    payload,
    { new: true }
  );
  return result;
};

// get semester data querys
const getAllBookServe = async (
  filtering: IBookLishtFilters,
  paginationOption: IPaginationOpton
): Promise<IGenaricRespons<IBookList[]>> => {
  const { searchTerm, ...filtersData } = filtering;

  const andConditions = [];

  // serchdata resive
  if (searchTerm) {
    andConditions.push({
      $or: academicSemesterSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // filter data resive
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    HelperPagination.calculationPagination(paginationOption);
  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  // condition display data show
  const whereConditons =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await BookLishModel.find(whereConditons)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await BookLishModel.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// get singel book
const singelBook = async (semesterId: string): Promise<IBookList | null> => {
  const result = await BookLishModel.findOne({ _id: semesterId });
  return result;
};

// Delete book
const DeleteBook = async (id: string): Promise<IBookList | null> => {
  const semesterId = { _id: id };
  const result = await BookLishModel.findByIdAndDelete(semesterId, {
    new: true,
  });
  return result;
};

export const BookServices = {
  createBook,
  getAllBookServe,
  singelBook,
  DeleteBook,
  updateBook,
};
