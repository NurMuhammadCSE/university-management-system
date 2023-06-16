/* eslint-disable no-undef */
import { Application, NextFunction, Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import usersRouter from './app/modules/user/user.route'
import globalErrorHandler from './app/middleware/globalErrorHandler'
// import ApiError from './errors/ApiError'
// import userService from "./app/modules/user/user.service"

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// console.log(app.get('env'))
// console.log(process.env)

app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // Without controller && route && utils
  // await userService.createUser({
  //   id: '111',
  //   password: "password",
  //   role: 'admin',
  // })

  // throw new Error("Error")
  // throw new ApiError(400, "Error")

  Promise.reject(new Error("Error"))

  // res.send('Working Successfully')
  // next()
})


// Global Error Handler
app.use(globalErrorHandler)

export default app
