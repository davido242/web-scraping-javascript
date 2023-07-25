import puppeteer from "puppeteer";
import fs from "fs";
import csvParser from "csv-parser";

(async () => {
  try {
    const browser = await puppeteer.launch({ executablePath: "/usr/bin/google-chrome", headless: false });
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com/");

    const grabQuote = await page.evaluate(() => {
      const quotes = document.querySelectorAll(".quote");

      let quoteArray = [];
      quotes.forEach((quoteTag) => {
        const quoteInfo = quoteTag.querySelectorAll("span");
        const actualQuote = quoteInfo[0];
        const actualAuthor = quoteInfo[1];
        const author = actualAuthor.querySelector("small");

        quoteArray.push({ quote: actualQuote.innerText, author: author.innerText });
      });
      return quoteArray;
    });

    console.log(grabQuote);
    await browser.close();

    fs.appendFile("data.csv", "", (err) => {
      if (err) throw err;
      grabQuote.forEach((item) => {
        fs.appendFile("data.csv", `${item.quote},${item.author}\n` + "<br />", (err) => {
          if (err) throw err;
        });
      });
      console.log("Done, thanks for scrapping and embeding into csv file...");
    });
  } 
  catch (err) {
    console.error("Error occurred:", err);
  }

})();
