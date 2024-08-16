const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config()

app.use(cors())
app.use(express.json());
app.post('/api/transaction', (req, res) => {
    const transaction = req.body;
    console.log(transaction);
    res.json(transaction)
})

app.listen(4040)