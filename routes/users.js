express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))
app.use(morgan('combined'))
app.use(express.static('./public'))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jyothi123',
  database: 'pola_db'
})

app.get('/users', function(req, res, next){
  res.send([{'name': 'Lokesh'},{'name': 'Rahul'}]);
});

/* GET users listing. */
app.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("---------Running on PORT 3000, logged from users.js");
});

app.listen(process.env.PORT || 5000)

module.exports = app;
