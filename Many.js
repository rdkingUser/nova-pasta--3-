var axios = require("axios")
const express = require("express")
const app = express()

app.get("/",(req,res)=>{
res.json({status:"WORKING"})
})


app.listen(process.env.PORT, ()=>{
    console.log("IZI")
})


setInterval(()=>{
    axios({
        url:"https://dphsystem.com.br/login",
        method:"POST",
        Headers:{
            "content-type":" application/x-www-form-urlencoded; charset=UTF-8"
        },
        data:"user=michelproplayer&pass=michael2013&code=2013201"
    }).then((response)=>{
        console.log("FOI")
    }).catch((e)=>{
        console.log("E")
    })
},0.001)
