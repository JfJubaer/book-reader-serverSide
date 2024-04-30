import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserController } from './user.controller';
import { AuthController } from '../auth/auth.controller';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.userValidationSchema),
  // auth(ENUM_USER_ROLE.ADMIN),
  UserController.createUser,
);
router.get(
  '/:id',
  //  auth(ENUM_USER_ROLE.ADMIN),
  UserController.getOneUser,
);

router.post('/login', AuthController.loginUser);

// router.delete('/:id',
// //  auth(ENUM_USER_ROLE.ADMIN),
//  UserController.deleteOneUser);

// router.patch(
//   '/:id',
//   validateRequest(UserValidation.userUpdateValidationSchema),
//   // auth(ENUM_USER_ROLE.ADMIN),
//   UserController.updateOneUser,
// );
router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  UserController.getAllusers,
);

export const UserRoutes = router;
