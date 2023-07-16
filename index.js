import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage({ headless: true });
    await page.goto("https://portal.uniabuja.edu.ng/apply_now.php");
    // await page.screenshot({ path: "MyNewPics4.png" });
    const grapPageItem = await page.evaluate(() => {
        const bTag = document.querySelectorAll(".alert.alert-info a b");
        // return bTag.innerText;
        // create an array
        let programmes = []
        bTag.forEach((tag) => {
            programmes.push(tag.innerHTML);
        })
        // Return the arrays
        return programmes;
    })
    console.log(grapPageItem)

    await browser.close();
})();