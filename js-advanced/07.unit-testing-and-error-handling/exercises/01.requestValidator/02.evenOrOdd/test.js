const {expect} = require('chai');
const {isOddOrEven} = require('./evenOrOdd');

describe('Test task even or odd', () => {
    it('test for non string input', () => {
        expect(isOddOrEven(8)).to.be.undefined;
    })
    it('test for odd length string', () => {
        expect(isOddOrEven("Boyan")).to.equal('odd');
    })
    it('test for even length string', () => {
        expect(isOddOrEven("Rosi")).to.equal('even');
    })
    it('test for multiple strings', () => {
        expect(isOddOrEven("Boyan Rosi")).to.equal('even');
    })
})