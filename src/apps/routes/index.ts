import express from 'express';
import { BooksRoutes } from '../modules/AllBooks/book.routes';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/booklist',
    route: BooksRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
