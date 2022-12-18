////Import dependencies
require('dotenv').config()
const express = require("express"); 
const app = express(); 
const methodOverride = require("method-override");
const mongoose = require("mongoose");

////templating engine
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

//connect to database
mongoose.set('strictQuery', true); //remove deprication warnings
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

///middleware
app.use(express.urlencoded({extended: false}))  //access req.body object
app.use(methodOverride('_method')) //use methodOverride to enable form send DELETE/PUT request
app.use(express.static('public')) //serve files from public statically

////Routes
app.get('/', (req, res) => {
    res.send('Welcom to the Captains Log App!')
})

////server listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));