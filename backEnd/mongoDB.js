const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://junasnazarito:sysarch@cluster0.hogzp7v.mongodb.net/user")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })


const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection





