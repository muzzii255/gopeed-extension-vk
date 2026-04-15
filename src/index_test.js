import { parseDownloadUrl } from './api/parse.js';

const urls = [
  'https://vkvideo.ru/video-230164869_456239042?list=ln-EFEZdvzkWbEtKXyACQ',
  `https://vk.com/video-49683486_456255103`,
  'https://vk.com/video-49683486_456256762',
];

for (const url of urls) {
  const { filename, downloadLink, fileSize } = await parseDownloadUrl(url, '');

  console.log(url, ' | ', filename, ' | ', downloadLink, ' | ', fileSize);
}
