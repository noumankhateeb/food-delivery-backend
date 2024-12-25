import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://noumankhateeb:noumankhateeb@cluster0.ce71t.mongodb.net/food-delivery-app')
    .then(()=>{
        console.log("DB Connected")
    })
}