import mongoose from 'mongoose'
import items from '../models/items.js'
import daiktai from '../models/prekes.js'

//mongodb+srv://eshop:testas1234@cluster0.35g5tee.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://eshop:testas1234@cluster0.35g5tee.mongodb.net/?retryWrites=true&w=majority', (error) => {
    if (error) {
        console.log('Nepavyko prisijungti prie duomenu bazes: ' + error)
        return 
    }
})

export const Items = mongoose.model('orders', items)

export const Daiktai = mongoose.model('prekes', daiktai)
