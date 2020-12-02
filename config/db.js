const mongoose = require("mongoose");

const connectDB = async () => {
    const conn = mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/cybernet", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })

    console.log(`MongoDB Connect: ${(await conn).connection.host}`.cyan.underline.bold)
}

module.exports = connectDB