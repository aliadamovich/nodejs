import express, {NextFunction, Request, Response} from 'express'
import { productsRoute } from './routes/products-route'
import { runDB } from './repositories/db'
import cors from "cors"


const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
	// res.redirect("/products")
	res.send('hi hi')
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