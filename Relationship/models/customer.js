const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(() => console.log("connection sucessfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');


}


const userSchema = new Schema({
    username: String,
    adressess: [
        {
            _id: false, // Disable automatic _id generation for subdocuments
            location: String,
            city: String,
        },
    ],
});