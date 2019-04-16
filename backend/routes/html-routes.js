const mysql = require('mysql');


module.exports = (app,connection) => {

    // If not route index is default 
    app.get('/',function(req,res){
        res.send('Contaxer API');

        
    });

    app.get('/contacts',function(req,res){
        //res.send('Contaxer API');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        const sql = "SELECT * FROM  user_contact WHERE uuid = 'dr.ooz1996@gmail.com'";
        connection.query(sql,[req.query],function (err,data) {
            (err)? res.send(err):res.json({users:data});
            
        })
        
    });


    app.get('/timeline',function(req,res){
        //res.send('Contaxer API');
        const sql = "SELECT * FROM  user_contact_count WHERE uuid = ?";
        connection.query(sql,[req.query],function (err,data) {
            (err)? res.send(err):res.json({users:data});
            
        })
        
    });


};
