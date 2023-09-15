const mongoose=require("mongoose")
const checkoutSchema = new mongoose.Schema({
  checkedInTime: { type: String, required: false,default:null },
  checkedOutTime: { type: String, required: false,default:null },
  book_id: { type: mongoose.Schema.Types.ObjectId, ref: "book", required: true },
 
}, { versionKey: false, timestamps: true })

const Checkout = mongoose.model("checkout", checkoutSchema)
module.exports= Checkout