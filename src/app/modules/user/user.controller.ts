import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { user } = req.body

  const result = await UserService.createUser(user)

  // res.status(200).json({
  //   success: true,
  //   message: 'user created successfully!',
  //   data: result,
  // })
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully!',
    data: result,
  })

  next()
})

export const usersController = {
  createUser,
}
