const express = require('express');
const DataStore = require('nedb');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
app.use(methodOverride());
app.set('view engine', 'ejs');
app.listen(3000, () => console.log('listening at 3000'));


app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

const database = new DataStore('database.db');
database.loadDatabase();

app.post('/api', (request,response) => {
  console.log("request received");
  const data = request.body;
  console.log(data);
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);

  response.redirect('/');
});

app.get('/', (req, res) => {
  database.find({}, (err, data) => {
    res.render('index.ejs', { data });
  });
});

app.get('/confess', (req, res) => {
  res.render("confessions.ejs");
})