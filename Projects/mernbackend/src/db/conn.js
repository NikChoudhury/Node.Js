const mongoose = require('mongoose');
const mongooseURL = process.env.DB_URL;
const mongooseConnect = async()=>{
    try {
        await mongoose.connect(mongooseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Database Successfully Connected!!")    
    } catch (error) {
        throw error;
    }
}
mongooseConnect();

