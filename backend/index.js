const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")

dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then((data) => {
    console.log("DBConnection Successfull!..." + data)
}).catch((err) =>
{
    console.log(err)
}) 

app.use(express.json())
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/product", productRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server running...")
})