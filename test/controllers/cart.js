var chai = require('chai');
var expect = chai.expect; 
var CartSummary = require('../../src/controllers/cartCtrl');

describe('CartSummary', function() {
    it('getSubtotal() should return 0 if no items are passed in', function() {
        var cartSummary = new CartSummary([]);
        expect(cartSummary.getSubtotal()).to.equal(0);
    });
});
