const mongoose = require("mongoose");

const computerVersionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cpu: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  hardDrive: {
    type: String,
    required: true,
    default: "None"
  },
  screen : {
    type: String,
    required: true,
    default: "None"
  }
//   year: {
//     type: String,
//   },
//   address: {
//     type: String,
//   },
//   country: {
//     type: String,
//   },
//   zipCode: {
//     type: String,
//   },
//   city: {
//     type: String,
//   },
//   state: {
//     type: String,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   isAdmin: {
//     type: Boolean,
//     required: true,
//     default: false,
//   },
});

const Computer = mongoose.model("Computer", computerVersionSchema);
module.exports = Computer;