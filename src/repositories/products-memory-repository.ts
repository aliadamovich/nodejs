const products = [
	{ id: 1, title: "chanel" },
	{ id: 2, title: "dior" },
]
type Products = {
	id: number
	title: string
}

export const productsRepository = {
	async findProducts(title: string | null | undefined): Promise<Products[]> {
		if (title) {
			return products.filter((p) => p.title.indexOf(title) > -1)
		} else {
			return products
		}
	},

	async createProduct(title: string): Promise<Products> {
		let newProduct = {
			id: +new Date(),
			title,
		}
		products.push(newProduct)
		return newProduct
	},

	async findProductById(id: number): Promise<Products | undefined> {
		let product = products.find((p) => p.id === id)
		return product
	},

	async updateProduct(id: number, title: string): Promise<boolean> {
		let foundProduct = products.find((p) => p.id === id)
		if (foundProduct) {
			foundProduct.title = title
			return true
		} else {
			return false
		}
	},

	async deleteProduct(id: number): Promise<boolean> {
		let indexOfProduct = products.findIndex((p) => p.id === id)
		if (indexOfProduct !== -1) {
			products.splice(indexOfProduct, 1)
			return true
		}
		return false
	},
}
