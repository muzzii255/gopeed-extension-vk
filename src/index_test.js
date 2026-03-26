import { parseDownloadUrl } from './api/parse.js';
const { filename, downloadLink, fileSize } = await parseDownloadUrl('https://vk.com/video-', '');

console.log(filename, downloadLink, fileSize);
