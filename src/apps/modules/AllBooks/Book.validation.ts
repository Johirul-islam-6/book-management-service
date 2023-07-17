import { z } from 'zod';
import { gender } from './Book.constants';
// import {  gender } from '../AllBooks/Book.constants';

const ReviewValidation = z.object({
  message: z.string(),
});
// zod validation error setup
const createBookListZodSchema = z.object({
  body: z.object({
    category: z.string({
      required_error: ' Book category is required',
    }),
    paragrap: z.string({
      required_error: 'name is required',
    }),
    title: z.string({
      required_error: 'Title is required',
    }),
    bookPhoto: z.string({
      required_error: 'BookPhoto is required',
    }),
    language: z.string({
      required_error: 'language is required',
    }),
    like: z
      .string({
        required_error: 'Like is required',
      })
      .optional(),

    author: z.string({
      required_error: 'author is required',
    }),
    genre: z.string({
      required_error: 'genre is required',
    }),
    publicationDate: z
      .string({
        required_error: 'Date is required',
      })
      .optional(),
    userEmail: z.string({
      required_error: 'Email is required',
    }),

    userPhoto: z
      .string({
        required_error: 'Phot is required',
      })
      .optional(),
    year: z
      .string({
        required_error: 'Year is Required',
      })
      .optional(),
    review: z.array(ReviewValidation).optional().optional(),
  }),
});

// Updateing Book
const updateBookListZodSchema = z.object({
  body: z.object({
    category: z
      .string({
        required_error: ' Book category is required',
      })
      .optional(),
    paragrap: z
      .string({
        required_error: 'name is required',
      })
      .optional(),
    title: z
      .string({
        required_error: 'Title is required',
      })
      .optional(),
    gender: z
      .enum([...gender] as [string, ...string[]], {
        required_error: 'Gender is required',
      })
      .optional(),
    author: z
      .string({
        required_error: 'author is required',
      })
      .optional(),
    genre: z
      .string({
        required_error: 'genre is required',
      })
      .optional(),
    publicationDate: z
      .string({
        required_error: 'Date is required',
      })
      .optional(),
    userEmail: z
      .string({
        required_error: 'Email is required',
      })
      .optional(),

    userPhoto: z
      .string({
        required_error: 'Phot is required',
      })
      .optional(),
    year: z
      .string({
        required_error: 'Year is Required',
      })
      .optional(),
  }),
});

export const BookValidation = {
  createBookListZodSchema,
  updateBookListZodSchema,
};
