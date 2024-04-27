import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    password: z.string({
      required_error: 'Password is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
  }),
});

const userUpdateValidationSchema = z.object({
  body: z.object({
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8)
      .optional(),
  }),
});

export const UserValidation = {
  userValidationSchema,
  userUpdateValidationSchema,
};
