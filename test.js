const expect = require('chai').expect
const woerter = require('.')
const they = it

describe('woerter', () => {
  they('are in an array', () => {
    expect(woerter).to.be.an('array')
  })

  they('are over 168,000 in number', () => {
    expect(woerter.length).to.be.above(168 * 1000)
  })

  they('can have one letter', () => {
    expect(woerter.filter(word => word.length === 1).length).to.be.above(4)
  })

  they('can have two letters', () => {
    expect(woerter.filter(word => word.length === 2).length).to.be.above(50)
  })

  they('can be lowercase', () => {
    expect(woerter.filter(word => word === word.toLowerCase()).length).to.be.above(100)
  })

  they('can have uppercase', () => {
    expect(woerter.filter(word => word !== word.toLowerCase()).length).to.be.above(100)
  })

  they('all have length', () => {
    expect(woerter.every(word => word.length > 0)).to.equal(true)
  })
})

describe('woerter.lowercase', () => {
  they('are in an array', () => {
    expect(woerter.lowercase).to.be.an('array')
  })

  they('are over 144,000 in number', () => {
    expect(woerter.lowercase.length).to.be.above(144 * 1000)
  })

  they('can have one letter', () => {
    expect(woerter.lowercase.filter(word => word.length === 1).length).to.be.above(4)
  })

  they('can have two letters', () => {
    expect(woerter.lowercase.filter(word => word.length === 2).length).to.be.above(50)
  })

  they('are all lowercase', () => {
    expect(woerter.lowercase.every(word => word === word.toLowerCase())).to.equal(true)
  })

  they('all have length', () => {
    expect(woerter.lowercase.every(word => word.length > 0)).to.equal(true)
  })
})

describe('woerter.uppercase', () => {
  they('are in an array', () => {
    expect(woerter.uppercase).to.be.an('array')
  })

  they('are over 144,000 in number', () => {
    expect(woerter.uppercase.length).to.be.above(144 * 1000)
  })

  they('can have one letter', () => {
    expect(woerter.uppercase.filter(word => word.length === 1).length).to.be.above(4)
  })

  they('can have two letters', () => {
    expect(woerter.uppercase.filter(word => word.length === 2).length).to.be.above(50)
  })

  they('are all uppercase', () => {
    expect(woerter.uppercase.every(word => word === word.toUpperCase())).to.equal(true)
  })

  they('all have length', () => {
    expect(woerter.uppercase.every(word => word.length > 0)).to.equal(true)
  })
})
