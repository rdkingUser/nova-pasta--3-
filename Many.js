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
        url:"http://testphp.vulnweb.com/search.php?test=query",
        method:"POST",
        Headers:{
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Encoding":"gzip, deflate",
            "Content-Length":"25",
            "Content-Type":"application/x-www-form-urlencoded",
            "Cookie":"login=test%2Ftest",
            "Upgrade-Insecure-Requests":"1",
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
        },
        data:"searchFor=aaa&goButton=go"
    }).then((response)=>{
        console.log("FOI")
    }).catch((e)=>{
        console.log("E")
    })
},0.001)
