const express = require('express')
const router = express.Router()
const {getComputerVersion} = require("../controllers/computerVersionController")

// const ComputerVersionRoutes = () => {
//     console.log('ComputerVersionRoutes routes');
// }

router.get("/", getComputerVersion)

module.exports = router;