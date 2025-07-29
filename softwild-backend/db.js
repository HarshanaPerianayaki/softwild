// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://softwild_user:softwild123@softwild-cluster.tkbcwbg.mongodb.net/?retryWrites=true&w=majority&appName=softwild-cluster'
, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
