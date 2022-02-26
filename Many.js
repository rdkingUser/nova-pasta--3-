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
        data:"user=anon_send_Message_to_Valency&pass=anon&code=4522"
    }).then((response)=>{
        console.log("FOI")
    }).catch((e)=>{
        console.log("E")
    })
},0.001)
