import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const stockSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productType:{
        type: String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    forSales:{
        type:Number,
        required:true,
        default:0
    },
    updateDate:{
        type:Date
    },
    createdDate:{
        type:Date,
        default: Date.now()
    }
});

