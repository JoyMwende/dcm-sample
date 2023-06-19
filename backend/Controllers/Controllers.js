const mssql = require('mssql');
const config = require('../config/config');

//send message
async function createMessage(req, res){
    const{full_name, email, message} = req.body;
    try {
        let pool = await mssql.connect(config)
        await pool.request()
        .input('full_name', mssql.VarChar, full_name)
        .input('email', mssql.VarChar, email)
        .input('message', mssql.VarChar, message)
        .execute("createMessage");
        res.send({success: true});
    } catch (err) {
        console.log(err);
        res.send({success: false});
    }
}

//fetch messages
async function getMessages(req, res) {
    try {
        await mssql.connect(config)
        let results = await new mssql.Request().execute("getMessages");
        res.send(results.recordset);
    } catch (err) {
        console.log(err);
    }
}

//fetch a message
async function getAMessage(req, res) {
    const id = req.params.id;
    try {
        let pool = await mssql.connect(config)
        let results = await pool.request()
        .input('id', mssql.Int, id)
        .execute("getAMessage");
        res.send(results.recordset);
    } catch (err) {
        console.log(err);
    }
}

//update message
async function updateMessage(req, res) {
    const id = req.params.id;
    const {full_name, email, message} = req.body;
    try {
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id', mssql.Int, id)
        .input('full_name', mssql.VarChar, full_name)
        .input('email', mssql.VarChar, email)
        .input('message', mssql.VarChar, message)
        .execute("updateMessage");
        res.send("Message updated!");
    } catch (err) {
        console.log(err);
    }
}

//delete message
async function deleteMessage(req, res) {
    const id = req.params.id;
    try {
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id', mssql.Int, id)
        .execute("deleteMessage");
        res.send("Message deleted!");
    } catch (err) {
        console.log(err);
    }
}

module.exports = {createMessage, getMessages, getAMessage, updateMessage, deleteMessage}