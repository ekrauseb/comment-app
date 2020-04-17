 const express = require('express');
 const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');
require('dotenv/config');

//Middlewares 
app.use(cors(
   {origin: ['http://localhost:4200', 'http://127.0.0.1:4200', 'http://paginadeenrique.myartsonline.com', 'http://www.enriquekrause.es', 'http://librovisitas.myartsonline.com'],
      credentials: true
      }
))
app.use(bodyParser.json());

 //imports routes
const postsRoute = require('./routes/post');

//Middlewares 
app.use('/post', postsRoute);


 //ROUTES
 app.get('/', (req,res) => {
    res.send("We are on home");
 });


 
 //Connect to db
 mongoose.connect(
process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
 () => console.log("conected to db")
 );


 //start listening the server
 app.listen(process.env.PORT || 3000);


