var express = require("express");
var app = express();
app.get("/api",(req,res)=>{
    res.json({
        "result":88
    })
})
app.listen(3000)