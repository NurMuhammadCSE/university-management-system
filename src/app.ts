import { Application, NextFunction, Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import usersRouter from './app/modules/user/user.route'
// import userService from "./app/modules/user/user.service"

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // await userService.createUser({
  //   id: '111',
  //   password: "password",
  //   role: 'admin',
  // })
  res.send('Working Successfully')
  next()
})

export default app
