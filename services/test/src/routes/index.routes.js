const express = require('express');
const router = express.Router();

router.get('/sahara',(req,res)=>{
    res.json("Falklands islands");
});
module.exports = router;