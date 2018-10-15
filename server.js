const express =require('express'); // the framework
const mongoose =require('mongoose'); // object modeling for our MongoDB database
const bodyParser =require('body-parser'); // allow us to take request/data from the body

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The magic happens on port: ${port}`));