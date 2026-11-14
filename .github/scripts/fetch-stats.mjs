import fs from 'node:fs/promises';

const STATS_FILE = new URL('../../stats.json', import.meta.url);

function parseAbbreviatedNumber(raw) {
  if (!raw) return null;
  const cleaned = raw.replace(/\u00a0/g, ' ').trim();
  // Match e.g. "463K", "463 mil", "1.4M", "164,264,010"
  const numMatch = cleaned.match(/([\d.,]+)\s*(K|M|B|mil|mi)?/i);
  if (!numMatch) return null;

  let numStr = numMatch[1];
  const suffix = (numMatch[2] || '').toLowerCase();

  if (suffix) {
    numStr = numStr.replace(',', '.');
    const val = parseFloat(numStr);
    if (Number.isNaN(val)) return null;
    if (suffix === 'k' || suffix === 'mil') return Math.round(val * 1_000);
    if (suffix === 'm' || suffix === 'mi') return Math.round(val * 1_000_000);
    if (suffix === 'b') return Math.round(val * 1_000_000_000);
  }

  // Exact integer like "164.264.010" or "164,264,010"
  const digitsOnly = numStr.replace(/[.,]/g, '');
  const parsed = parseInt(digitsOnly, 10);
  return Number.isNaN(parsed) ? null : parsed;
}

async function fetchYouTubeStats() {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9'
  };

  const [mainRes, aboutRes] = await Promise.all([
    fetch('https://www.youtube.com/@Hy0scin3', { headers }),
    fetch('https://www.youtube.com/@Hy0scin3/about', { headers })
  ]);

  const mainHtml = await mainRes.text();
  const aboutHtml = await aboutRes.text();

  let youtubeSubscribers = null;
  let youtubeViews = null;

  const subMatch =
    mainHtml.match(/([\d.,]+\s*(?:K|M|B|mil|mi)?)\s*(?:subscribers|de inscritos|inscritos)/i) ||
    aboutHtml.match(/([\d.,]+\s*(?:K|M|B|mil|mi)?)\s*(?:subscribers|de inscritos|inscritos)/i);
  if (subMatch) {
    youtubeSubscribers = parseAbbreviatedNumber(subMatch[1]);
  }

  const viewMatch =
    aboutHtml.match(/"viewCountText":"([\d.,]+)\s*(?:views|visualizações)"/i) ||
    mainHtml.match(/"viewCountText":"([\d.,]+)\s*(?:views|visualizações)"/i);
  if (viewMatch) {
    youtubeViews = parseAbbreviatedNumber(viewMatch[1]);
  }

  return { youtubeSubscribers, youtubeViews };
}

async function fetchTikTokStats() {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9'
  };

  try {
    const res = await fetch('https://www.tiktok.com/@hy0scin3', { headers });
    const html = await res.text();

    const followerMatch = html.match(/"followerCount":(\d+)/);
    const heartMatch = html.match(/"heartCount":(\d+)/) || html.match(/"heart":(\d+)/);

    return {
      tiktokFollowers: followerMatch ? parseInt(followerMatch[1], 10) : null,
      tiktokLikes: heartMatch ? parseInt(heartMatch[1], 10) : null
    };
  } catch {
    return { tiktokFollowers: null, tiktokLikes: null };
  }
}

async function main() {
  const current = JSON.parse(await fs.readFile(STATS_FILE, 'utf8'));

  const [yt, tt] = await Promise.all([fetchYouTubeStats(), fetchTikTokStats()]);

  const updated = {
    tiktokFollowers: tt.tiktokFollowers || current.tiktokFollowers,
    tiktokLikes: tt.tiktokLikes || current.tiktokLikes,
    youtubeSubscribers: yt.youtubeSubscribers || current.youtubeSubscribers,
    youtubeViews: yt.youtubeViews || current.youtubeViews,
    updatedAt: new Date().toISOString().slice(0, 10)
  };

  await fs.writeFile(STATS_FILE, JSON.stringify(updated, null, 2) + '\n', 'utf8');
  console.log('Updated stats:', updated);
}

main();
