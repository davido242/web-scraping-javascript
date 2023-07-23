import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage({ headless: true });
    await page.goto("https://quotes.toscrape.com/");

    const grabQuote = await page.evaluate(() => {
        const quotes = document.querySelectorAll(".quote")

        let quoteArray = []
        quotes.forEach((quoteTag) => {
            const quoteInfo = quoteTag.querySelectorAll('span')
            const actualQuote = quoteInfo[0]
            const actualAuthor = quoteInfo[1]
            const author = actualAuthor.querySelector('small')

            quoteArray.push({quote: actualQuote.innerText, author: author.innerText})
        })
        return quoteArray;
    })

    console.log(grabQuote)
    await browser.close();
})();