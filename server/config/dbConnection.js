import mongoose from "mongoose";

const dbConnection = async (mongodb_url) => {
    try {
        const DB_OPTIONS = {
            dbName: 'tour_management'
        }
        await mongoose.connect(mongodb_url, DB_OPTIONS);
        console.log('db connection successfully');
    } catch (error) {
        throw new Error('server connection fail');
    }
}

export default dbConnection;