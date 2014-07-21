'use strict';

var request = require('request');//import 'request' node module

function Stock(symbol, count){
  this.symbol = symbol.toUpperCase();
  this.count = parseInt(count);
  this.price = 0;
}

Stock.getQuote =function(symbol, cb){//parameters = string, callback function
  //URL is a concat string 'URL' + company stock market symbol; remove 'p' in "~/jsonp?symbol="
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=' + symbol.toUpperCase();
  request(url, function(error, response, body){
    body =JSON.parse(body); //converts string into JSON object
    cb(body.LastPrice); //cb calls .getQuote function in ~/test/unit/stock.js
  });
};

module.exports = Stock; 
