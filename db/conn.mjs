import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.mongoURI || '';

async function connectionDB() {
    try {
        await mongoose.connect(connectionString);

        console.log('MongoDB connected');
    } catch (err) {
        console.error(err)
        process.exit(1);
    }
}

export default connectionDB;