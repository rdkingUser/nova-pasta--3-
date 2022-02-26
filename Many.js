var axios = require("axios")
const express = require("express")
const app = express()

app.get((req,res)=>{
res.json({status:"WORKING"})
})

setInterval(()=>{
    axios({
        url:"http://testphp.vulnweb.com/search.php?test=query",
        method:"PUT",
        Headers:{
            "content-type":"application/form-url-encoded"
        },
        data:"searchFor=a&goButton=go"
    }).then((response)=>{
        console.log(response.data)
    }).catch((e)=>{
        console.log("E")
    })
},0.001)



app.listen(process.env.PORT||3000, ()=>{
    console.log("IZI")
})
