const Computer = require("../models/computerVersionModel")

const getComputerVersion = async (req, res, next) => {
    // res.send("Handling the routes")
    try {
        console.log("Getting computer")
        const computers = await Computer.find({}).orFail()
        res.json(computers)
        
    } catch(error) {
        next(error)
    }
}

module.exports = {getComputerVersion}