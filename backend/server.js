const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express();
app.use(cors());

app.get('/api/publications', async (req, res) => {
  const userId = req.query.user || 'L6Esq54AAAAJ'; // Replace with your own Google Scholar ID
  const url = `https://scholar.google.com/citations?user=${userId}&hl=en`;

  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const publications = await page.evaluate(() => {
      const rows = Array.from(document.querySelectorAll('.gsc_a_tr'));
      return rows.map((row, index) => {
        const titleEl = row.querySelector('.gsc_a_at');
        const authorsEl = row.querySelector('.gs_gray');
        const journalEl = row.querySelectorAll('.gs_gray')[1];
        const yearEl = row.querySelector('.gsc_a_y span');

        return {
          id: index + 1,
          title: titleEl?.textContent || '',
          authors: authorsEl?.textContent || '',
          journal: journalEl?.textContent || '',
          year: yearEl?.textContent || '',
          url: titleEl ? 'https://scholar.google.com' + titleEl.getAttribute('href') : '',
        };
      });
    });

    await browser.close();
    res.json(publications);
  } catch (error) {
    console.error('Scraping failed:', error);
    res.status(500).json({ error: 'Failed to scrape publications' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
