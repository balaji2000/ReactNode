import React from "react";

const StockSingle = (props) =>{
    return (
        <div>
            <h3>ProductName: {props.currentStock.productName}</h3>
            <h3>productType: {props.currentStock.productType}</h3>
            <h3>Quantity: {props.currentStock.quantity}</h3>
        </div>
);
}

export default StockSingle;