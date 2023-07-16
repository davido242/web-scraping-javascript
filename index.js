import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.google.com/");
    await page.screenshot({ path: "MyNewPics3.png" });

    await browser.close();
})();