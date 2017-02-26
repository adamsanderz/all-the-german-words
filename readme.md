# an-array-of-german-words

An array of ~168,000 German words derived from [Wiktionary](https://de.wiktionary.org/) and [the Letterpress word
list](https://github.com/atebits/Words). Works with node and browserify.

Try also the original [an-array-of-english-words](https://github.com/zeke/an-array-of-english-words) from [zeke](https://github.com/zeke/).

## Programmatic Usage

To use the module in Javascript code, install it locally:

```sh
npm install an-array-of-german-words --save
```

Then:

```js
var woerter = require("an-array-of-german-words")
var quatschWoerter = woerter.filter(function(w) { return !!w.match(/^quatsch/i) })
console.log(quatschWoerter)
```

## Command Line Usage

There's a CLI that prints all words to STDOUT. Install it globally:

```sh
npm i -g an-array-of-german-words
words | grep -i Dampfschifffahrtsgesellschaft
```
