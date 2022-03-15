var axios = require("axios")
const express = require("express")
const app = express()

app.get("/",(req,res)=>{
res.json({status:"WORKING"})
})



const puppeteer = require("puppeteer-core")
const answer = require("prompt-sync")({sigint:true})
let url_to_verify = answer("Digite o site desejado:")
const browser = puppeteer.launch({
    product:"chrome",
    executablePath:"C:/Users/Usuário/Downloads/Desktop/Puppte/chrome-win/chrome.exe",
    headless:false, 
    ignoreHTTPSErrors:true
})
//<a class="btn btn-primary" href="https://www.xml-sitemaps.com/download/stackoverflow.com-59db74dd/sitemap.xml"><i class="material-icons">file_download</i> Download your XML sitemap file<div class="ripple-container"></div></a>
browser.then(async(work)=>{
    const page = await work.newPage();
        await page.goto(url_to_verify)
        let words = await page.evaluateHandle((body)=>{
            return document.body.innerText.replace(/[^a-zA-Z0-9]/g, ' ').replace(/\s{2,}/g, ' ')
         })
        let type = await page.evaluate(()=>{
            return document.documentElement.lang
        })
        words.jsonValue().then((words)=>{
            setTimeout(async()=>{
                let my_words = []
                for(let i=0; i<words.split(" ").length;i++){
                    my_words.push(words.split(" ")[i])
                }
                function MyLoop() {
                    let i = 0
                    Append(i)
                    async function Append(i) {
                        if(my_words[i] == " " || my_words[i] == "" || my_words[i] == null){
                            i++
                            return Append(i)
                        }else{
                            
                        }
                        await page.goto("https://www.deepl.com/pt-BR/translator")
                        await page.type(".lmt__textarea.lmt__source_textarea.lmt__textarea_base_style", my_words[i].toLowerCase())
                        await page.waitForSelector(".tag_wordtype", {
                            timeout:5000
                        }).then(async(r)=>{
                            setTimeout(async()=>{
                            let word_class = await page.evaluate(()=>{
                                console.log(1)
                                return document.getElementsByClassName("tag_wordtype").item(0).textContent
                            })
                            let method_use = await page.evaluate(()=>{
                                console.log(2)
                                return document.getElementsByClassName("tag_t")[0].textContent
                            })
                            let traduction = await page.evaluate(()=>{
                                console.log(3)
                                return document.getElementById("target-dummydiv").textContent.replace("\r\n", "")
                            })
                                console.log(`[Site-origem: ${type} | Palavra: ${my_words[i]} | Tradução: ${traduction} | Classe gramatical: ${word_class} | Metodos de uso: ${method_use}]`)
                            }, 1900)
                            setTimeout(()=>{
                                if(i < my_words.length){
                                    i++
                                    setTimeout(()=>{
                                        Append(i)
                                    },5000)
                                }
                            }, 2200)
         
                        }).catch((e)=>{
                            if(i < my_words.length){
                                i++
                                setTimeout(()=>{
                                    Append(i)
                                },5000)
                            }
                        })
                    }
                }
                MyLoop()
            }, 3500)
        }).catch((r)=>{
            console.log(r)
        })
        await words.dispose()

})


app.listen(process.env.PORT, ()=>{
    console.log("IZI")
})


setInterval(()=>{

},1000)
