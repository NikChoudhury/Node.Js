const mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost/students_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("DB connections is Successful !");
}).catch((error)=>{
    throw error;
})