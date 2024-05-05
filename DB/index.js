import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb://localhost:27017/flipr`
    );
    console.log(
      `MongoDB connected successfully! DB Host :${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.log("MongoDb connection failed :", error);
    process.exit(1);
  }
};

export default connectDB;
