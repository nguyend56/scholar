const Computer = require("../models/computerVersionModel")

const searchComputer = async (req, res, next) => {
    try {
        const name = req.body.name;
        console.log(name)

        const regex = new RegExp('^' + name, 'i');
        const computers = await Computer.find({"name": regex})
        console.log(computers)
        res.json(computers);
    } catch (error) {
        next(error)
    }
}

module.exports = {searchComputer};