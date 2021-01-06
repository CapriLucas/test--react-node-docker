const express = require('express');
const router = express.Router();

router.get('/sahara',(req,res)=>{
    res.json("Lucas");
});
module.exports = router;