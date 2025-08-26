import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import fs from 'fs';

// Create sitemap stream with base URL
const sitemap = new SitemapStream({ hostname: 'https://vidyasagarfoodywallah.netlify.app' });
const pipeline = sitemap.pipe(createGzip());

// Add your site URLs
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/menu', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.5 });

// End the stream
sitemap.end();

// Save to public/ folder
const data = await streamToPromise(pipeline);
fs.writeFileSync('./public/sitemap.xml.gz', data); // 🔄 yeh line change ki gayi hai
