import mongoose from 'mongoose'


export default new mongoose.Schema({
    photo: String,
    item: String,
    description: String
})