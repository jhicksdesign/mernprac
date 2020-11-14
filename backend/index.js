import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'

const app = express();
const PORT = 3000;

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// BodyParser setup

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());


app.get('/', (req, res) => res.send(`Our server is running on port: ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port: ${PORT}`))