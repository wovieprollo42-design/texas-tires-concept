// Renders the wheel layers and the sidewall background from wheel-render.html
// into assets/img/wheel/*.webp. Needs: npm i puppeteer-core sharp, and Google Chrome.
// Usage: node design/wheel-render/render.js
const path = require('path');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer-core');
const sharp = require('sharp');

const here = __dirname;
const out = path.join(here, '..', '..', 'assets', 'img', 'wheel');
const chrome = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(path.join(here, 'wheel-render.html')).href, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  const layers = [['body', 'body', [1200, 600]], ['rotor', 'rotor', [1200, 600]], ['caliper', 'caliper', [1200, 600]], ['arcbg', 'arc', [1280, 640]]];
  for (const [id, name, widths] of layers) {
    const png = await (await page.$('#' + id)).screenshot({ omitBackground: true });
    for (const w of widths) {
      await sharp(png).resize(w).webp({ quality: 80, alphaQuality: 90, effort: 6 }).toFile(path.join(out, `${name}-${w}.webp`));
      console.log(`${name}-${w}.webp`);
    }
  }
  await browser.close();
})();
