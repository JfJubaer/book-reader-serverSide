import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { bookController } from './book.controller';
import { BookValidation } from './book.validation';
const router = express.Router();

router.post('/', bookController.createBook);
router.get('/:id', bookController.getAllBooks);
router.get('/', bookController.getAllBooks);
router.delete('/:id', bookController.deleteBook);
router.patch(
  '/:id',
  validateRequest(BookValidation.bookZodSchema),
  bookController.updateBook,
);

export const bookRoutes = router;
