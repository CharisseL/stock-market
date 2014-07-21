//test file

/*global describe, it */
'use strict';

var expect = require('chai').expect;
var Stock = require('../../app/models/stock.js');

describe('Stock', function(){
  describe('constructor', function(){
    it('should create a new stock object', function(){
      var aapl = new Stock('aApL', '100');

      expect(aapl).to.be.instanceof(Stock);
      expect(aapl.symbol).to.equal('AAPL');
      expect(aapl.count).to.equal(100);
      expect(aapl.price).to.equal(0);
    });
  });

  describe('.getQuote', function(){
    it('should get a quote from a webservice', function(done){
      //creates asynchronous test so that you don't have to wait for webservice.
      Stock.getQuote('aapl', function(quote){//I'm going to call Stock.getQuote, and it'll call me back when it has the Stock Quote.
        expect(quote).to.be.least(0);
        done(); //call 'done' function to tell mocha test is done
      });

    });
  });

});
