const express = require('express'),
  app = express(),
  mysql = require('mysql'),
  cors = require('cors'),
  bodyParser = require('body-parser');

const chartRouter = require('./routes/chart');

// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};

// setup database
db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MMmm@123',
  database: 'chart',
  insecureAuth : true,
  multipleStatements: true
})

// use the modules
app.use(cors())
app.use(bodyParser.json());
app.use('/chart', chartRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));
