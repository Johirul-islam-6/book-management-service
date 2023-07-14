import { NextFunction, Request, RequestHandler, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IBookList } from './Book.interface';
import { BookServices } from './Book.service';
import { queryPick } from '../../../shared/quaryPick';
import { pagintionField } from '../../constant/pagination';

// create a Book
const createBook: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...Booklist } = req.body;
    const result = await BookServices.createBook(Booklist);

    sendResponse<IBookList>(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result,
      message: 'A Book add successfully',
    });
    next();
  }
);

// update a book
const updateBook = catchAsync(async (req: Request, res: Response) => {
  const semesterid = req.params.id;
  const updateData = req.body;
  const result = await BookServices.updateBook(semesterid, updateData);
  sendResponse<IBookList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'A singel semester updated successfully',
  });
});

// get all booklist
const getAllBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filtering = queryPick(req.query, [
      'searchTerm',
      'title',
      'author',
      'genre',
      'year',
    ]);
    const paginationOption = queryPick(req.query, pagintionField);
    // console.log(paginationOption)

    const result = await BookServices.getAllBookServe(
      filtering,
      paginationOption
    );

    // create a senrespons function
    sendResponse<IBookList[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      meta: result.meta,
      data: result.data,
      message: 'Booklisht data display successfully',
    });

    next();
  }
);

// get Singel book
const SingelGetBook = catchAsync(async (req: Request, res: Response) => {
  const singelBook = req.params.id;
  // console.log(singelBook)
  const result = await BookServices.singelBook(singelBook);

  sendResponse<IBookList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'A singel book Show the display successfully',
  });
});

// delet singel book
const SingelDeleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookServices.DeleteBook(id);
  sendResponse<IBookList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'A singel Book Deleted successfully',
  });
});

export const BookController = {
  createBook,
  getAllBook,
  SingelGetBook,
  SingelDeleteBook,
  updateBook,
};
