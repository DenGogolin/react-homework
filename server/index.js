const express = require('express');
const path = require('path');
//const htmlDoc = require('../dist/index.html');
const app = express();

// console.log(htmlDoc);
app.get('/', (req, res) => res.send('Hello world'));


app.listen('8080', () => console.log(`Listening on port 8080, try: http://localhost:8080`));