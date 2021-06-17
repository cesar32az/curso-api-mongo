import mongoose from 'mongoose'

const connect = async () => {
    try {
        const URI = "mongodb://localhost:27017/api-mongo"
        const options = {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            authSource: 'admin',
            user: "admin",
            pass: "julio123"
        }
        await mongoose.connect(URI, options)
        console.log("BD connected!")
    } catch (error) {
        console.log({db_error: error})
    }
}
connect()