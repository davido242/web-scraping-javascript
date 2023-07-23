import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage({ headless: false });
    await page.goto("https://quotes.toscrape.com/");
    await page.click('a[href="/login"]')

    await page.type("#username", 'davidowho', {delay: 100})
    await page.type("#password", 'davido25', {delay: 100})

    await page.click('input[value="Logi"]');

    // await browser.close();
})();