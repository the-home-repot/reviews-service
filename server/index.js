const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3030;

const db = require(path.join(__dirname, '../database/index.js'));

app.use(express.static(path.join(__dirname, '../public')))
app.use(parser.json());

app.post('/products/reviews', (req, res) => {

  db.save(req.body, (err, data) => {
    if (err) console.log('we got an error', err)
    else {
      console.log('yo this may have done just worked')
      res.sendStatus(201);
    }
  })
  
}) 



app.listen(port, () => console.log(`listening on port ${port}`));