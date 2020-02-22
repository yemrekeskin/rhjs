# rhjs v1.0.13

The **rhjs** library exported as Node.js modules.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install rhjs
```

## Usage

```javascript
const express = require("express");
const rhjs = require("rhjs");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const success = result => {
    console.log(result);
    res.json(result);
  };
  const error = result => {
    console.log(result);
    res.json(result);
  };
  rhjs.get("https://jsonplaceholder.typicode.com/todos", success, error);

  // res.send('empty data');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```
