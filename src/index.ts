import express, {Request, Response} from 'express'
import favicon from 'serve-favicon'
import path from 'path'

const app = express()

const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, "public")))
app.use(favicon(path.join(__dirname, "public", "favicon.ico")))
app.get('/', (req: Request, res: Response) => {
	res.send('Hello Alesyia!!!')
})
app.get("/favicon.ico", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "favicon.ico"))
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})