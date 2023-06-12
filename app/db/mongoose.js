import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = `mongodb+srv://Alex:OdCyge7sSSKdVBWy@cluster0.iiqpq7k.mongodb.net/address?retryWrites=true&w=majority`;

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectDB;
