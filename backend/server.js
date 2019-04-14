const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 5001;
const app = express();

const connection = mysql.createConnection({
    host: "contaxer.ckhb8dxjqnm8.eu-central-1.rds.amazonaws.com",
    user: "contaxer",
    password: ".Contaxer2018",
    database: "contaxer_"
});


connection.connect(function(err){
    (err)? console.log(err) : console.log(connection);
})


require('./routes/html-routes')(app, connection);
app.listen(PORT,() => {
    console.log('listening on 3000')
  })

 