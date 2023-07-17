import { Schema, model } from 'mongoose';
import { IBookList, BookModel } from './Book.interface';
// import { ABookCetagoryTitele,  } from './Book.constants';

const userSchema = new Schema<IBookList>(
  {
    // id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    category: {
      type: String,
      required: true,
    },
    paragrap: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    bookPhoto: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
      // unique: false,
    },
    userPhoto: {
      type: String,
    },

    publicationDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    like: {
      type: String,
    },
    review: [{ message: { type: String } }],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const BookLishModel = model<IBookList, BookModel>(
  'bookList',
  userSchema
);
