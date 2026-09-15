import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
try {
  await page.goto(process.env.BASE_URL || "http://localhost:5199", {
    waitUntil: "networkidle",
  });

  await page.click('.navbar__links a[href="#contact"]');
  await page.waitForTimeout(1100);
  const top = await page.locator("#contact").evaluate((el) => el.getBoundingClientRect().top);
  console.log("contact section top after nav click:", top);

  await page.click(".contact__submit");
  await page.waitForTimeout(400);
  console.log(
    "status after empty submit (should be empty):",
    JSON.stringify((await page.textContent(".form-status"))?.trim() ?? "")
  );

  await page.fill("#from_name", "QA");
  await page.fill("#reply_to", "qa@example.com");
  await page.fill("#message", "hello");
  await page.click(".contact__submit");
  await page.waitForTimeout(6000);
  console.log("status after valid submit:", (await page.textContent(".form-status"))?.trim());
} finally {
  await browser.close();
}
