import React from 'react';
import axios from 'axios';
class StockForm extends React.Component {

    submit (event){
        event.preventDefault();
        axios.post("http://localhost:3000/stock", {
            productName: this.refs.productName.value,
            productType: this.refs.productType.value,
            quantity:this.refs.quantity.value,
            forSales:this.refs.quantity.value
        }).then((result)=>{
            console.log(result)
        }).catch((err)=> {console.log(err)})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit.bind(this)}>
                <input id="productName" ref='productName' type="text" placeholder='Product Name'/>
                <input id="productType" ref = 'productType' type="text" placeholder='Product Type'/>
                <input id="quantity"  ref = 'quantity' type="number" placeholder='Quantity'/>
                <input id="forSales" ref = 'forSales'type="number" placeholder='For Sales'/>
                <input type='submit' value = 'submit'/>
                </form>
            </div>
        );
    }
}

export default StockForm;