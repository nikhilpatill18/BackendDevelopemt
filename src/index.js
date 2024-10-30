// require('dotenv').config({ path: './env' })
import dotenv from 'dotenv'
import connectdb from "./db/index.js";
dotenv.config({
    path: './env'
})
connectdb()

/*  ; (async () => {
     try {
         await mongoose.connect(`${process.env.MONGODB_URI}/videotube`)
         app.on("error", (err) => {
             console.log("Error", err)
         })
         app.listen(process.env.PORT, () => {
             console.log("welcome ti exopress")
         })

     }
     catch (err) {
         console.error("error", err)
         throw err
     }
 })() */