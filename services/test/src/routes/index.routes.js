const express = require('express');
const router = express.Router();

router.get('/sahara',(req,res)=>{
    res.json("Hijo de putaaa");
});
module.exports = router;