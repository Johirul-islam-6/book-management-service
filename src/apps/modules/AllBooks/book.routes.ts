import express from 'express';
import { BookController } from './book.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { BookValidation } from './Book.validation';

const router = express.Router();

router.post(
  '/add-book',
  validateRequest(BookValidation.createBookListZodSchema),
  BookController.createBook
);
router.patch(
  '/:id',
  validateRequest(BookValidation.updateBookListZodSchema),
  BookController.updateSemester
);
router.get('/', BookController.getAllBook);
router.get('/:id', BookController.SingelGetBook);
router.delete('/:id', BookController.SingelDeleteBook);

export const BooksRoutes = router;
