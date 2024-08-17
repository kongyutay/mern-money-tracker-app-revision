const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction')
const { default: mongoose } = require('mongoose');
require('dotenv').config()

app.use(cors())
app.use(express.json());
app.post('/api/transaction', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL)
    const {name, price, description, datetime} = req.body;
    const transaction = await Transaction.create({
        name, description, datetime, price
    })
    console.log(transaction);
    res.json(transaction)
})

app.get('/api/transactions', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL)
    const transactions = await Transaction.find()
    res.json(transactions)
})

app.listen(4040)