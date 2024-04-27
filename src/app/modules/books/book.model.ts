import { Schema, model } from 'mongoose';
import { IBook, IBookModel } from './book.interface';

export const BookSchema = new Schema<IBook, IBookModel>(
  {
    title: {
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
    publicationDate: {
      type: String,
    },
    reviews: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Book = model<IBook, IBookModel>('Book', BookSchema);
