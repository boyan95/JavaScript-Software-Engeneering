const {expect} = require('chai');
const numberOperations = require('./03. Number Operations_Resources (1)')

describe('Testing numberOperations',() => {
    describe('testing function powNumber', () => {
        it('it works', () => {
            expect(numberOperations.powNumber(2)).to.equal(4)
        })

    })
    describe('testing numberChecker function', () => {
        it('parses and validates input to number', () => {
            expect(numberOperations.numberChecker('2')).to.equal('The number is lower than 100!')
        })
        it('input is a number under 100', () => {
            expect(numberOperations.numberChecker(2)).to.equal('The number is lower than 100!')
        })
        it('input is a number over 100', () => {
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!')
        })
        it('input is a string over 100', () => {
            expect(numberOperations.numberChecker('101')).to.equal('The number is greater or equal to 100!')
        })
        it('incorrect input', () => {
            expect(() => numberOperations.numberChecker([1,2,3]) ).to.throw
        })
    })
    describe('testing sumArray function', () => {
        it('works', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.equal([ 2, 4, 6])
        })
    })
})

