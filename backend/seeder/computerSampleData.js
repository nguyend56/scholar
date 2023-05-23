const ObjectId = require("mongodb").ObjectId;

const computers = [
  {
    name: 'ALTAIR 8800',
    manufacturer: 'MITS',
    model: 'Altair 8800',
    year: 1975,
    price: 439,
    cpu: "Intel 8080 @ 2 Mhz",
    ram: "4 Kb",
  },
  {
    name: 'Powerbook 5300',
    manufacturer: 'Apple',
    model: 'Powerbook 5300',
    year: 1995,
    price: 6800,
    cpu: "PowerPC @117MHz",
    ram: "32 Mb",
    hardDrive: "1.1 Gb",
    screen: "10.4 inch"
  }
]

module.exports = computers