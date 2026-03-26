const headers = {
  accept: '*/*',
  'accept-encoding': 'identity',
  'accept-language': 'en-US,en;q=0.6',
  'cache-control': 'no-cache',
  'content-type': 'application/x-www-form-urlencoded',
  origin: 'https://vk.com',
  pragma: 'no-cache',
  priority: 'u=1, i',
  referer: 'https://vk.com',
  cookie:
    'remixlang=3;  remixscreen_width=2560; remixscreen_height=1440; remixscreen_dpr=1; remixscreen_depth=24; remixscreen_orient=1; remixscreen_winzoom=1; remixsf=1; remixcurr_audio=null; remixmaudio=null; remixdark_color_scheme=1; remixcolor_scheme_mode=auto; remixdt=-25200;',
  'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Brave";v="146"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Linux"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'sec-gpc': '1',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
  'x-requested-with': 'XMLHttpRequest',
};

export async function parseDownloadUrl(videoUrl, preferredQuality = '') {
  const mainUrl = 'https://vk.com/al_video.php?act=show';
  const allQualities = ['url2160', 'url1440', 'url1080', 'url720', 'url480', 'url360', 'url240', 'url144'];
  let videoId;
  if (videoUrl.includes('?z=video')) {
    videoId = videoUrl.match(/z=video([^&%]+)/)[1];
  } else {
    videoId = videoUrl.match(/video(-?\d+_\d+)/)[1];
  }

  var payload = `act=show&al=1&al_ad=0&autoplay=1&list=&module=group&screen=0&show_next=1&video=${videoId}&webcast=0`;
  const resp = await fetch(mainUrl, {
    method: 'POST',
    headers: headers,
    body: payload,
  });

  let downloadLink;
  const body = await resp.json();
  const arr = body['payload'][1];
  const urlBody = arr[arr.length - 1]['player']['params'][0];

  if (preferredQuality) {
    const preferredKey = `url${preferredQuality}`;
    if (urlBody[preferredKey] && urlBody[preferredKey] !== '') {
      downloadLink = urlBody[preferredKey];
    }
  }

  if (!downloadLink) {
    for (const key of allQualities) {
      if (urlBody[key] && urlBody[key] !== '') {
        downloadLink = urlBody[key];
        break;
      }
    }
  }
  var filename = videoId + '.mp4';
  return { downloadLink, filename };
}
