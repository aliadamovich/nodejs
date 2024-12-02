import express, {NextFunction, Request, Response} from 'express'
import { productsRoute } from './routes/products-route'
import { runDB } from './repositories/db'

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

let requestCount = 0
const requestCountMiddleware = (req: Request, res: Response, next: NextFunction) => {
	requestCount++
	next()
}

app.use(requestCountMiddleware)
app.use('/products', productsRoute)
console.log(requestCount)

const startApp = async () => {
	await runDB();
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})
}
startApp()