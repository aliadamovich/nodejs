import express, {Request, Response} from 'express'
import favicon from 'serve-favicon'
import path from 'path'

const app = express()

const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, "public")))
app.get('/', (req: Request, res: Response) => {
	res.send('Hello Alesyia!!!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})