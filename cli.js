#!/usr/bin/env node

var woerter = require('.')

if (process.argv.indexOf('-l') > 0) {
  woerter = woerter.lowercase
}

process.stdout.write(woerter.join('\n'))
