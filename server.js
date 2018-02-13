const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const app = express()
//const db = new sqlite3.Database(process.env.DATABASE);
const path = require('path');
const config = require('./config.js')
const db = require('./db.js')

app.get('/', (req,res) => res.send('Hello world!!!'))

app.listen(config.port, () => {
	console.log(`Now running on port ${config.port}`)
})
