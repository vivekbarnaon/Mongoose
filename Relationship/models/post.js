const e = require('express');
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
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

const getData = async () => {
    let result = await Post.findOne().populate('user', 'username ');
    console.log(result);
};
getData();   

// const del = async () => {
//     await Post.findByIdAndDelete('64f0c8b2f1d4c8b2f1d4c8b2');
//     await User.findByIdAndDelete('64f0c8b2f1d4c8b2f1d4c8b2');
//     console.log("Data deleted successfully");
// }
// del();