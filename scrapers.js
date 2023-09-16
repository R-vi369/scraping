const puppeteer = require('p');

async function scrapeProduct('url'){
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    page.goto(url)
    const [el]= page.$x('')
}

scrapeProduct("https://www.amazon.com/b/?_encoding=UTF8&node=16225006011&content-id=amzn1.sym.4a5ac24a-2f14-4296-8a03-0c034c0a7904&ref_=pd_gw_unk")