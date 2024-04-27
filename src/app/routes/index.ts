import express from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { bookRoutes } from '../modules/books/book.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: bookRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
