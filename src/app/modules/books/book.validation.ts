import { z } from 'zod';

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title Token is required',
    }),
    author: z.string({
      required_error: 'author Token is required',
    }),
    genre: z.string({
      required_error: 'genre Token is required',
    }),
    publicationDate: z.string({
      required_error: 'publicationDate Token is required',
    }),
    reviews: z.array(
      z.string({
        required_error: 'reviews Token is required',
      }),
    ),
  }),
});

const bookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    genre: z.string().optional(),
    publicationDate: z.string().optional(),
    reviews: z.array(z.string()).optional(),
  }),
});

export const BookValidation = {
  bookZodSchema,
  createBookZodSchema,
};
