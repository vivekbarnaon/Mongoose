const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(() => console.log("connection sucessfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');


}


const OrderSchema = new Schema({
    item: String,
    price: Number,
});

const CustomerSchema = new Schema({
    name: String,
    age: Number,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
});

const Order = mongoose.model('Order', OrderSchema);
const Customer = mongoose.model('Customer', CustomerSchema);

const findCustomer = async () => {
    let result = await Customer.find({}).populate('orders');
    console.log("Customers found:", result);

}

findCustomer();

// const addOrder = async () => {
//     let res = await Order.insertMany([
//         {item: 'item1', price: 100},
//         {item: 'item2', price: 200},
//         {item: 'item3', price: 300},
//     ]);
//     console.log("Orders added:", res);
// }

// addOrder();