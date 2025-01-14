import express from 'express';
import loginDB from './loginDB';
const app= express();

app.get('/' ,function (req,res){
    res.send(loginDB);


});

app.post("/login", async function  (req,res){
    const {username, password} = req.body;
    const user = await user.findOne({username, password});
    if (user) {
        req.session.user = user;
        res.send('Login successful');
    } else {
        res.send('Invalid username or password');
    }
    

});

app.listen(3000);


