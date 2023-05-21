const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const app = require("./app")
dotenv.config();


mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log("Database connection is successful 🛢".red.bold);
});


// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//     console.log("Database connection is successful 🛢".red.bold);
// }).catch((err) => {
//     console.error("Error connecting to database: ", err);
// });




const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})