const express = require ('express');
const mongoose = require('mongoose');
//  mongoose.set('Strict Query', true)

const route = require('./routes/route.js');
const app = express()

app.use(express.json())


mongoose.connect("mongodb+srv://mohitkanwaria_:IZ2vta9qwavx3n0S@cluster0.2byd2qy.mongodb.net/backendtask8dec22?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    })

    .then( () => console.log("MongoDB is connected"))
    .catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});