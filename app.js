// const express  = require('express');
// const app = express();


// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(express.static(__dirname + '/public'))


// app.use('/api/cases', require('./controllers/caseController'))




// module.exports = app;


const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')


app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use('/api/employees', require('./controllers/employeeController'))
app.use('/api/blog', require('./controllers/postController'))

module.exports = app;