import './App.css';
import React from 'react';
import {Header,TestingCondition} from './testngHeader'
import {Routes, Route} from 'react-router-dom';


import StockForm from '../Components/stock/StockForm';
import StockList from '../Components/stock/StockList';
import StockSingle from '../Components/stock/StockSingle';

import image from '../Components/images(4).jpg'
import axios from 'axios';
import {Home,Items} from '../Components/router';

class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      stocks:[{productName:"killer", productType:"maker"}],
      currentStock:{}
    }
    this.updateCurrentStock = this.updateCurrentStock.bind(this);
  }

  
  updateCurrentStock (item){
    this.setState({
      currentStock:item
    });
  }
  componentDidMount (){
    const url = 'http://localhost:3000/stock'
    axios.get(url).then((result)=>{
      this.setState({
        stocks:result.data
      })
    }).catch((err)=>{
      console.log(err)
    })
  }
  render(){
    const list = [
      "killer","king","maker"
    ]
    let listObj = list.map( (dish,i) => ({id:i,dish:dish}))
  return (
    <div className="container">
      <div className = "container-fluid">
        <div className = "row">
          <div className = "col s12">Menu</div>
        </div>
        <div className = "row">
          <div className = "col s3"><StockList stocks = {this.state.stocks}
          updateCurrentStock = {this.updateCurrentStock}/></div>
          <div className = "col s9"><StockSingle currentStock = {this.state.currentStock}/></div>
        </div>
        <div className = "row">
          <div className = "col s12"><StockForm  /></div>
        </div>
        <Header name="Dark Devil" list={listObj}/>
        <img src = {image} alt="dark devil"/>
        <TestingCondition condition = {false}/>
      </div>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/item" element = {<Items />}/>
      </Routes>
    </div>
  );
}
}
export default App;
