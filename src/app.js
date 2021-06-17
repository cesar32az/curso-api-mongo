import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import apiRoutes from './routes'
import './config/database'

// initializations
const app = express()


//settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


// routes
app.use('/api', apiRoutes)

export default app