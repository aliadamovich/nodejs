import { client } from "./db"

type Products = {
	id: number
	title: string
}
const productsCollection = client.db("shop").collection<Products>("products");

export const productsRepository = {
	async findProducts(title: string | null | undefined): Promise<Products[]> {
		if (title) {
			return productsCollection.find({title: {$regex: title}}).toArray()
		} else {
			return productsCollection.find().toArray()
		}

		//то же самое но более красиво
			// const filter: any = {}
			// if (title) {
			// 	filter.title = { $regex: title }
			// }
			// return productsCollection.find(filter).toArray()
	},

	async createProduct(title: string): Promise<Products> {
		let newProduct = {
			id: +new Date(),
			title,
		}

		await productsCollection.insertOne(newProduct)
		return newProduct
	},

	async findProductById(id: number): Promise<Products | null> {
		let product: Products | null = await productsCollection.findOne({ id: id })
		return product
	},

	async updateProduct(id: number, title: string): Promise<boolean> {
		const res = await productsCollection.updateOne({ id: id }, { $set: { title: title } })
		return res.matchedCount === 1
	},

	async deleteProduct(id: number): Promise<boolean> {
		let res = await productsCollection.deleteOne({ id: id })
		return res.deletedCount === 1
	},
}
