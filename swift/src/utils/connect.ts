import mongoose from "mongoose";


const URI = process.env.MONGO_URI;

if(!URI){
    throw Error("Please connect your database")
}

const ConnectMongo = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Database Connected");
        
    } catch (error) {
        console.error("Database noy connected", error);
        
    }
}

export default ConnectMongo;