'use strict';

var Stock = require('./stock');

function Portfolio(name, stocks){
  this.name = name;
  this.stocks = [];
}

Portfolio.prototype.add = function(symbol, amount){
  var stock = findStock(this.stocks, symbol);
  
  if(stock){ //if you find this stock, modify it by adding stocks together
    stock.count += amount;
  }else{ //if not, it will create a new object & push new object into array
    stock = new Stock(symbol, amount);
    this.stocks.push(stock);
  }
}; 

// PRIVATE HELPER FUNCTIONS//
// this function is "hidden", and is not exported with the Portfolio model

function findStock(stocks, symbol){
  for(var i = 0; i < stocks.length; i++){
    if(stocks[i].symbol === symbol.toUpperCase()){
      return stocks[i];
    }
  }
  return null;
}


module.exports = Portfolio; 
