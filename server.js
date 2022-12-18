////Import dependencies
require('dotenv').config()
const express = require("express"); 
const app = express(); 
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Log = require('./models/logs');

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

//Index
app.get('/logs', (req, res) => {
    Log.find({}, (err, allLogs) => {
        res.render('Index', {logs: allLogs})
    })
})

//New
app.get('/logs/new', (req, res) => {
    res.render('New')
})

//Create
app.post('/logs', (req, res) => {
    req.body.shipIsBroken === 'on' ? //if checked, req.body.shipIsBroken is set to 'on'
        req.body.shipIsBroken = true:
        req.body.shipIsBroken = false
    Log.create(req.body, (error, createdLog)=>{
        res.redirect('/logs');
    })
})
//Show
app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        res.render('Show', {log: foundLog})
    })
})

//Edit
app.get('/logs/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        res.render('Edit', {log: foundLog})
    })

})

//Update
app.put('/logs/:id', (req, res) => {
    req.body.shipIsBroken === 'on' ? //if checked, req.body.shipIsBroken is set to 'on'
        req.body.shipIsBroken = true:
        req.body.shipIsBroken = false
    Log.findByIdAndUpdate(req.params.id, req.body, (error, updatedLog)=>{
        res.redirect(`/logs/${req.params.id}`);
    })
})

//Delete
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, deletedLog) => {
        res.redirect('/logs')
    })
})


////server listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));