# Flat-Er - Flattens stuff. That's it.

## Table of Contents
- [Installation](#Installation)

## Installation
### npm
```
$ npm install --save flat-er
```

## Usage
```
import fe  from 'flat-er'

const stuff = {
  pets: {
    dogs: [
      {
        name: 'douggie',
        goodBoy: true
      }
    ],
    cats: [
      {
        name: 'mrSocks',
        whiskers: true,
        litterBox: {
          clean: false
        },
        colors: [
          'black',
          'white'
        ]
      }
    ]
  }
}
const flattened = fe.flatten(stuff)
```

### Result
```
{
  "pets.dogs.0.name": "douggie",
  "pets.dogs.0.goodBoy": true,
  "pets.cats.0.name": "mrSocks",
  "pets.cats.0.whiskers": true,
  "pets.cats.0.litterBox.clean": false,
  "pets.cats.0.colors.0": "black",
  "pets.cats.0.colors.1": "white"
}
```