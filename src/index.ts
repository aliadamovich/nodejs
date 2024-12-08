import express, {NextFunction, Request, Response} from 'express'
import { productsRoute } from './routes/products-route'
import { runDB } from './repositories/db'

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.get("/", (req, res) => {
	res.redirect("/products")
})

app.use('/products', productsRoute)

const startApp = async () => {
	await runDB();
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})
}
startApp() 

export default app;