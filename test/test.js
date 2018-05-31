var sum = require('../lib/index')
//var should = require('should')


describe('the sum of all numbers between min number and max number', function () {
	it('[8, 3] return 33', function () {
		sum([8, 3]).should.equal(33)
	})
	it('[-2, 20] return 207', function () {
		sum([-2, 20]).should.equal(207)
	})
	it('[666, 666666] return 222221889666', function () {
		sum([666, 666666]).should.equal(222221889666)
	})
})