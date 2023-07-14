import { IcetagoryBookTitele } from './Book.interface';

export const gender = ['male', 'female'];
export const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const ABookCetagoryTitele: IcetagoryBookTitele[] = [
  'Story',
  'Fun',
  'Game',
];
export const studentSearchableFields = [
  'id',
  'email',
  'contactNo',
  'name.fisrtName',
  'name.middleName',
  'name.lastName',
];

export const studentFilterableFields = [
  'searchTerm',
  'id',
  'bloodGroup',
  'email',
  'contactNo',
  'emergencyContactNo',
];

export const academicSemesterSearchableFields = [
  'year',
  'author',
  'title',
  'genre',
];
