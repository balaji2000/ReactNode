import mongoose from "mongoose";

import { stockSchema } from "../model/stockModel";

const Stock = mongoose.model("stock", stockSchema);

export const addNewStock = (req, res) => {
    let newStock = new Stock(req.body);
    //console.log(req.body, newStock);
    newStock.save((err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                message: "Stock added successfullly",
                stock: newStock
            })
        }
    });
}

export const getAllStocks = (req, res) => {
    Stock.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.json(result)
        }
    })
}

export const getStockByID = (req, res) => {
    Stock.findById(req.params.stockID, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result)
        }
    })
}

export const deletStockByID = (req, res) => {
    Stock.findByIdAndDelete(req.params.stockID, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.json({
            message: "deleted successfullly",
            product: result
        })
    })
}

export const updateByID = (req, res) => {
    let body = req.body;
    body.updateDate = Date.now();
    Stock.findByIdAndUpdate(req.params.stockID,body, {new:true}, (err,result)=>{
        if (err){
            res.send(err)
        }else{
            res.json(result)
        }
    })
}

