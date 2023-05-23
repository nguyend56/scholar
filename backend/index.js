const { createServer } = require("http");
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Enable CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5002");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


const httpServer = createServer(app);

app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");

app.get("/", async (req, res, next) => {
  res.json({ message: "API running..." });
});

// mongodb connection
const connectDB = require("./config/db");
connectDB();

app.use("/api", apiRoutes);

// app.use((error, req, res, next) => {
//   if (process.env.NODE_ENV === "development") {
//     console.error(error);
//   }
//   next(error);
// });
// app.use((error, req, res, next) => {
//   if (process.env.NODE_ENV === "development") {
//     res.status(500).json({
//       message: error.message,
//       stack: error.stack,
//     });
//   } else {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));