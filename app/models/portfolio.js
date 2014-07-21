'use strict';

var Stock = require('./stock');

function Portfolio(name, stocks){
  this.name = name;
  this.stocks = [];
}

Portfolio.prototype.add = function(symbol, amount){
  var index = findStock(this.stocks, symbol);
  
  if(index >= 0){ //if you find this stock
    this.stocks[index].count += amount; //then, add stocks together
  }else{ //if does not find matching stock,
    var stock = new Stock(symbol, amount); //then, create a new Stock object & push to tech stock array
    this.stocks.push(stock);
  }
}; 

Portfolio.prototype.del = function(symbol, amount){
  var index = findStock(this.stocks, symbol);
  
  if(index >= 0){ //if index is greater than or equal to 0, then substract the amount from the total
    this.stocks[index].count -= amount; //then, 

    if(this.stocks[index].count <= 0){//if stocks is less than or equal to 0, 
      this.stocks.splice(index, 1);//then, start at index and remove 1 stock object
  }
  }
};

// PRIVATE HELPER FUNCTIONS//
// this function is "hidden", and is not exported with the Portfolio model

function findStock(stocks, symbol){
  for(var i = 0; i < stocks.length; i++){
    if(stocks[i].symbol === symbol.toUpperCase()){
      return i;
    }
  }
  return -1;
}


module.exports = Portfolio; 
