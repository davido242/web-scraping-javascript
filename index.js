import puppeteer from "puppeteer";

(async () => {
    // const browser = await puppeteer.launch({dumpio: true});
    const browser = await puppeteer.launch({executablePath: '/usr/bin/google-chrome', headless: false});
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com/");
    await page.click('a[href="/login"]')

    await page.type("#username", 'davidowho', {delay: 100})
    await page.type("#password", 'davido25', {delay: 100})

    await page.click('input[value="Login"]');

    // await browser.close();
})();

// ldd: ./chrome: No such file or directory
