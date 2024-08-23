import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${'todo-list'}`)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log('mongodb err', error)
    }
}

export default dbConnect
