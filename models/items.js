import mongoose from 'mongoose'


export default new mongoose.Schema({
    item: String,
    name: String,
    lastName: String,
    address: String,
    city: String,
    phone: String,
    email: String,
    status: String
})