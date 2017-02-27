#!/usr/bin/env node

var woerter = require('.')

if (process.argv.indexOf('-l') > 0) {
  woerter = woerter.lowercase
} else if (process.argv.indexOf('-u') > 0) {
  woerter = woerter.uppercase
}

process.stdout.write(woerter.join('\n'))
