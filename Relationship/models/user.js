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

const User = mongoose.model('User', userSchema);


//userschema data ko add krne ke liye ek function banate hain
const addUser = async () => {
    let user1  = new User({
        username : "sherlock",
        adressess: [{
            location: "221B Baker Street",
            city: "London",
        }]
    })

    user1.adressess.push({location: "Baker Street", city: "London"});
    await user1.save();

}
addUser();
