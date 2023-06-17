/* eslint-disable no-undef */
import { Application, NextFunction, Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandler'
// import { UserRoutes } from './app/modules/user/user.route'
// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route'
import router from './app/routes'
import httpStatus from 'http-status'
// import ApiError from './errors/ApiError'
// import userService from "./app/modules/user/user.service"

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// console.log(app.get('env'))
// console.log(process.env)

// app.use('/api/v1/users/', UserRoutes)
// app.use('/api/v1/academic-semester/', AcademicSemesterRoutes)


app.use('/api/v1/', router)

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // Without controller && route && utils
  // await userService.createUser({
  //   id: '111',
  //   password: "password",
  //   role: 'admin',
  // })

  // throw new Error("Error")
  // throw new ApiError(400, "Error")

  Promise.reject(new Error('Error'))

  // res.send('Working Successfully')
  next()
})

// Global Error Handler
app.use(globalErrorHandler)

// Handle Not Found
app.use((req:Request, res:Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success:false,
    message: 'Not Found',
    errorMessage: [{
      path: req.originalUrl,
      message: 'API Not Found'
    }]
  })
  next()
})

export default app
