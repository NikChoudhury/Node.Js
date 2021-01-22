const mongoose = require('mongoose');
const mongooseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lczq8.mongodb.net/student_reg?retryWrites=true&w=majority`
const mongooseConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || mongooseURL, {
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

