const { createServer } = require("http");
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const httpServer = createServer(app);

let people = [
  {
    name: "Hannah Rickard",
    number: "06-51-99-56-83",
    id: 1
  },
  {
    name: "Hyun Namkoong",
    number: "10987654",
    id: 2
  },
  {
    name: "Courtney Martinez",
    number: "3691215",
    id: 3
  }
]


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