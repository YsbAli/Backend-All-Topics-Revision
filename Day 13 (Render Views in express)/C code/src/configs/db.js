

const mongoose = require("mongoose")

const connet = async () => {

    try {
        const connect = await mongoose.connect('mongodb+srv://yousub:yousub_123@cluster0.cflcuof.mongodb.net/Day13RenderViewinExpress?retryWrites=true&w=majority')
        return connect;
    }
    catch (err) {
        console.log("error in db...", err.message)
    }
}

module.exports = connet