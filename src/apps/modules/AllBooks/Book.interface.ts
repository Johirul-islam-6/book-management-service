import { Model } from 'mongoose';

export type IcetagoryBookTitele = 'Story' | 'Fun' | 'Game';

export type IReview = {
  message: string;
};
// type ReviewMessage = string[];

export type IBookList = {
  meta?: { page: number; limit: number; total: number } | undefined;
  data?: IBookList[] | null | undefined;
  category: string;
  paragrap: string;
  title: string;
  bookPhoto: string;
  language: string;
  author: string;
  genre: string;
  publicationDate?: Date;
  userEmail: string;
  userPhoto?: string;
  year: string;
  review?: IReview[];
  like?: string;
};

export type IBookLishtFilters = {
  searchTerm?: string;
};

export type BookModel = Model<IBookList, Record<string, unknown>>;
