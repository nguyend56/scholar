const express = require('express')
const router = express.Router()
const {searchComputer} = require("../controllers/searchController")

// const ComputerVersionRoutes = () => {
//     console.log('ComputerVersionRoutes routes');
// }

router.post("/", searchComputer)

module.exports = router;