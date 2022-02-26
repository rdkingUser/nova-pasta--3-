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
        url:"http://testphp.vulnweb.com/categories.php",
        method:"GET",
        Headers:{
        }
    }).then((response)=>{
        console.log(response.data)
    }).catch((e)=>{
        console.log("E")
    })
},0.001)
