const expect = require('chai').expect
const woerter = require('.')
const they = it

describe('woerter', () => {
  they('are in an array', () => {
    expect(woerter).to.be.an('array')
  })

  they('are over 1,648,000 in number', () => {
    expect(woerter.length).to.be.above(1.648 * 1000 * 1000)
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

  they('are over 1,500,000 in number', () => {
    expect(woerter.lowercase.length).to.be.above(1.5 * 1000 * 1000)
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
