const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// load env vars
dotenv.config({ path: "./config/config.env" });

// load models
const User = require("./models/User");
const Image = require("./models/Image");

// connect to DB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/cybernet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// read json files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
);
const images = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/images.json`, "utf-8")
);


// import into DB
const importData = async () =>  {
    try{
        await User.create(users)
        await Image.create(images)

        console.log(`Data imported...`.green.inverse)
        process.exit()
    } catch (err) {
        console.error(err)
    }
}

// delete data
const deleteData = async () =>  {
    try{
        await User.deleteMany()
        await Image.deleteMany()

        console.log(`Data destroyed...`.red.inverse)
        process.exit()
    } catch (err) {
        console.error(err)
    }
}

if(process.argv[2] === "-i")  {
    importData()
} else if (process.argv[2] === "-d") {
    deleteData()
}