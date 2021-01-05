const express = require('express');
const router = express.Router();

router.get('/sahara',(req,res)=>{
    res.send("Hijo de putaaa");
});
module.exports = router;