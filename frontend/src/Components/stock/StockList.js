import React from 'react';

const StockList = (props)=>{
  
    return (
            <div>
                <ul><li>Stocks</li>
                {
                    props.stocks.map((item) =>(
                        <a href = "#!" 
                        key={item._id} onClick = {props.updateCurrentStock.bind(this,item)}>
                            {item.productName} {item.productType} </a>
                    ))
                }
                </ul>
            </div>
    )
}

export default StockList;