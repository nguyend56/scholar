const connectDB = require("../config/db");
connectDB();

const computerData = require("./computerSampleData");

const Computer = require("../models/computerVersionModel");

const importData = async () => {
  try {
    await Computer.collection.deleteMany({});

    if (process.argv[2] !== "-d") {
      await Computer.insertMany(computerData);

      console.log("Seeder data imported successfully");
      process.exit();
      return
    }
    console.log("Seeder data deleted successfully");
    process.exit();
  } catch (error) {
    console.error("Error while proccessing seeder data", error);
    process.exit(1);
  }
};
importData();
