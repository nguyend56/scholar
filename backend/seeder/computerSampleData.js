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
    name: 'Commodore PET',
    manufacturer: 'Commodore',
    model: 'PET',
    year: 1977,
    price: 795,
    cpu: "MOS 6502 @ 1 Mhz",
    ram: "4 Kb",
  },

  {
    name: 'APPLE II',
    manufacturer: 'Apple',
    model: 'II',
    year: 1977,
    price: 1298,
    cpu: "MOS 6502 @ 1 Mhz",
    ram: "4 Kb",
  },

  {
    name: 'ZX81',
    manufacturer: 'Sinclair',
    model: 'ZX81',
    year: 1981,
    price: 130,
    cpu: "Ziglog Z80 @ 3.25 Mhz",
    ram: "1 Kb",
  },

  {
    name: 'KAYPRO 2X',
    manufacturer: 'Kaypro',
    model: '2X',
    year: 1984,
    price: 1595,
    cpu: "Ziglog Z80 @ 4 Mhz",
    ram: "64 Kb",
  },

  {
    name: 'Macintosh SE',
    manufacturer: 'Apple',
    model: 'Macintosh SE',
    year: 1987,
    price: 3900,
    cpu: "Motorola 6800 @ 8 Mhz",
    ram: "1 Mb",
    hardDrive: "40 Mb"
  },

  {
    name: 'Macintosh Classic',
    manufacturer: 'Apple',
    model: 'Macintosh Classic',
    year: 1990,
    price: 1000,
    cpu: "Motorola 6800 @ 8 Mhz",
    ram: "1 Mb",
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
  },

  {
    name: 'iMac G3',
    manufacturer: 'Apple',
    model: 'iMac G3',
    year: 1998,
    price: 1299,
    cpu: "PowerPC G3 @233MHz",
    ram: "32 Mb",
    hardDrive: "4 Gb"
  },

  {
    name: 'PowerBook G4',
    manufacturer: 'Apple',
    model: 'Powerbook G4',
    year: 2001,
    price: 1500,
    cpu: "PowerPC G4 @500MHz",
    ram: "256 Mb",
    hardDrive: "20 Gb"
  },

  {
    name: 'iMac G4',
    manufacturer: 'Apple',
    model: 'iMac G4',
    year: 2002,
    price: 1299,
    cpu: "PowerPC G4 @700MHz",
    ram: "256 Mb",
    hardDrive: "40 Gb"
  },

  {
    name: 'Power Mac G5',
    manufacturer: 'Apple',
    model: 'Power Mac G5',
    year: 2003,
    price: 1999,
    cpu: "PowerPC G5 @2.7GHz",
    ram: "256 Mb",
    hardDrive: "160 Gb"
  },

  {
    name: 'MacBook Pro',
    manufacturer: 'Apple',
    model: 'MacBook Pro',
    year: 2006,
    price: 2000,
    cpu: "Intel Core Duo @1.67Ghz",
    ram: "2 Gb",
    hardDrive: "80 Gb"
  },

  {
    name: 'MacBook Air',
    manufacturer: 'Apple',
    model: 'MacBook Air',
    year: 2008,
    price: 1799,
    cpu: "Intel Core 2 Duo @2.13Ghz",
    ram: "2 Gb",
    hardDrive: "128 Gb SSD"
  },
  
]

module.exports = computers