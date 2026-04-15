# Gopeed Extension - VK Video Downloader

A Gopeed extension for downloading videos from VK.com.

## Features

- Download public videos from VK.com
- Automatic quality selection (highest available: 2160p, 1440p, 1080p, 720p, 480p, 360p, 240p, 144p)
- Supports multiple VK video URL formats

## Supported URLs

- `https://vk.com/video-XXXXXX_XXXXXX`
- `https://vkvideo.ru/video-XXXXXX_XXXXXX`
- `https://vk.com/...?z=video-XXXXXX_XXXXXX`

## Installation

### From GitHub

1. Open Gopeed
2. Go to Extensions
3. Click "Install from URL"
4. Enter: `https://github.com/muzzii255/gopeed-extension-vk`

### Manual Installation

1. Download or clone this repository
2. Build the extension:
   ```bash
   npm install
   npm run build
   ```
3. In Gopeed, go to Extensions and install the built extension

## Development

### Prerequisites

- Node.js
- npm

### Setup

```bashhttps://github.com/muzzii255/gopeed-extension-vk
# Install dependencies
npm install

# Build for production
npm run build

# Build with watch mode for development
npm run dev
```

### Project Structure

```
gopeed-extension-vk/
├── src/
│   ├── index.js        # Extension entry point
│   └── api/
│       └── parse.js    # VK video URL parser
├── icons/
│   └── vk.png          # Extension icon
├── manifest.json       # Extension manifest
├── webpack.config.js   # Webpack configuration
└── package.json
```

## Limitations

- Only works with public videos
- Private videos are not supported
