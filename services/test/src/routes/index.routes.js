const express = require('express');
const router = express.Router();
const pool = require("../db/connection");

router.get('/sahara', async(req,res)=>{
    await pool.query("INSERT INTO message (text) VALUES ($1)",['hola']);
    const response = await pool.query("SELECT * FROM message");
    console.log(response.rows);
    res.json(response.rows[0].text);
});
module.exports = router;