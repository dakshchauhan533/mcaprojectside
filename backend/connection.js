const mongoose = require('mongoose');

// const url='mongodb://localhost:27017/Internship'
// const url='mongodb+srv://vanshikapal44:vanshikapal44 @cluster0.jbemkc8.mongodb.net/internship?appName=Cluster0'
const url=" mongodb+srv://vanshikapal44:Vanshika12@cluster0.jbemkc8.mongodb.net/internship?appName=Cluster0"


// asynchronous function - Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;