import { parseDownloadUrl } from './api/parse.js';

gopeed.events.onResolve(async (ctx) => {
  const preferredQuality = gopeed.settings.preferredQuality || '';
  const { filename, downloadLink } = await parseDownloadUrl(ctx.req.url, preferredQuality);
  if (downloadLink != '') {
    ctx.res = {
      name: 'vk-video',
      files: [
        {
          name: filename,
          req: {
            url: downloadLink,
          },
        },
      ],
    };
  } else {
    ctx.res = {
      name: 'vk-video',
      files: [
        {
          name: 'Error',
        },
      ],
    };
  }
});
