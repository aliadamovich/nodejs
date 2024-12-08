import { NextFunction, Router } from "express";
import {productsRepository} from '../repositories/products-db-repository'

export const productsRoute = Router()

productsRoute.get("/", async (req, res) => {
	const foundProduct = await productsRepository.findProducts(req.query.title?.toString())
	console.log("Received request for /products")
		res.send(foundProduct)
})

productsRoute.get("/:id", async (req, res) => {
	const product = await productsRepository.findProductById(+req.params.id)
	if (product) {
		res.send(product)
	} else {
		res.send(404)
	}
})

productsRoute.post("/", async (req, res) => {
	const createdProduct = await productsRepository.createProduct(req.body.title)
	res.status(201).send(createdProduct)
})

productsRoute.delete("/:id", async (req, res) => {
	const isDeleted = await productsRepository.deleteProduct(+req.params.id)
	if (isDeleted) {
		res.send(204)
	} else {
		res.send(404)
	}
})

productsRoute.put("/:id", async (req, res) => {
	const isUpdated = await productsRepository.updateProduct(+req.params.id, req.body.title)
	if (isUpdated) {
		const product = productsRepository.findProductById(+req.params.id)
		res.send(product)
		return
	}
	res.send(404)
})