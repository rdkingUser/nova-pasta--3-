var axios = require("axios")
const express = require("express")
const app = express()


app.listen(process.env.PORT, ()=>{
    console.log("IZI")
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
