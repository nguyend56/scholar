const express = require("express")
const app = express()
// const homePageRoutes = require("./HomePageRoutes")
const compVerRoutes = require("./ComputerVersionRoutes")
// const historyRoutes = require("./HistoryRoutes")
// const topManuRoutes = require("./TopManufacturersRoutes")
const searchRoutes = require("./SearchRoutes")

const jwt = require("jsonwebtoken");

app.get("/", (req, res) => {
  res.send('abcdefGGGG')
});

// app.get("/get-token", (req, res) => {
//     try {
//         const accessToken = req.cookies["access_token"];
//         const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
//         return res.json({ token: decoded.name, isAdmin: decoded.isAdmin });
//     } catch (err) {
//         return res.status(401).send("Unauthorized. Invalid Token");
//     }
// })

// app.use("/", homePageRoutes)
// app.use("/top-manufactures", topManuRoutes)
app.use("/computerVersion", compVerRoutes)
// app.use("/history", historyRoutes)


app.use("/search", searchRoutes);

module.exports = app