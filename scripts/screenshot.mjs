import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://localhost:5173";
const OUT = process.env.SHOTS || "shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

async function shoot(name, width, height, { fullPage = true } = {}) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage });
  await page.close();
  console.log("saved", name);
}

await shoot("desktop-1280-hero", 1280, 800, { fullPage: false });
await shoot("desktop-1280-full", 1280, 800);
await shoot("mobile-390-hero", 390, 844, { fullPage: false });
await shoot("mobile-390-full", 390, 844, { fullPage: true });
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.click(".navbar__burger");
  await page.waitForTimeout(350);
  await page.screenshot({ path: `${OUT}/mobile-menu-open.png` });
  await page.close();
  console.log("saved mobile-menu-open");
}

await browser.close();
