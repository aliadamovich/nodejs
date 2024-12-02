import { MongoClient } from "mongodb";

const mongoUri = process.env.mongoURI || "mongodb://0.0.0.0:27017/?maxPoolSize=20&w=majority";

export const client = new MongoClient(mongoUri);

export async function runDB() {
	try {
		// Connect the client to the server (optional starting in v4.7)
		await client.connect()
		// Send a ping to confirm a successful connection
		await client.db("products").command({ ping: 1 })
		console.log("connected successfully to mongo server")
	} catch {
		// Ensures that the client will close when you finish/error
		console.log("can't connect to server")
		await client.close()

	}
}
