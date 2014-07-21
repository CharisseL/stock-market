//test file

/*global describe, it */
'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio.js');
var Stock = require('../../app/models/stock.js');

describe('Portfolio', function(){
  describe('constructor', function(){
    it('should create a new portfolio object', function(){
      var tech = new Portfolio('Tech Portfolio');
      expect(tech).to.be.instanceof(Portfolio);
      expect(tech.name).to.equal('Tech Portfolio');
      expect(tech.stocks).to.have.length(0);
    });
  });

  describe('#add', function(){
   it('should add stocks objects to the tech portfolio stock array', function(){
    var tech = new Portfolio('Tech Portfolio');
    tech.add('aapl', 50); //adds new stock (symbol, and amount of stocks you want to buy)
    tech.add('msft', 35); // ^
    tech.add('aapl', 25); // ^^

    expect(tech.stocks).to.have.length(2);
    expect(tech.stocks[0]).to.be.instanceof(Stock);
    expect(tech.stocks[0].count).to.equal(75);
    expect(tech.stocks[1].count).to.equal(35);
   });
  });

  describe('#del', function(){
   it('should delete stock objects from portfolio stock array', function(){
    var tech = new Portfolio('Tech Portfolio');
    tech.add('aapl', 50); //adds stock (symbol, and amount of stocks you want to buy)
    tech.add('msft', 35); // ^^

    tech.del('aapl', 10); //deletes new stock (symbol, and amount of stocks you want to buy)
    tech.del('msft', 40); // ^
    tech.del('aapl', 20); // ^

    expect(tech.stocks).to.have.length(1);
    expect(tech.stocks[0].count).to.equal(20);
   });
 });
});

