const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const chain = require('lodash').chain
const basepath = path.join(__dirname, 'corpus')

var words = []
if (process.argv.indexOf('-l') > 0) {
  words = _(require('./woerter.json').map(word => word.toLocaleLowerCase('de')))
        .compact()
        .uniq()
        .sort()
        .value()
} else {
  words = chain(fs.readdirSync(basepath)
        .map(filename => fs.readFileSync(path.join(basepath, filename), 'utf8').split('\n')))
        .flatten()
        .compact()
        .uniq()
        .sort()
        .value()
}

process.stdout.write(JSON.stringify(words))
