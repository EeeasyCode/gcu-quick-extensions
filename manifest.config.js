import { defineManifest } from '@crxjs/vite-plugin'
import packageJson from './package.json' assert { type: 'json' };

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
export default defineManifest(async env => ({
  manifest_version: 3,
  name: "gcu quick extension",
  version: packageJson.version,
  description: packageJson.description,
//   action: {
//     default_popup: 'src/pages/popup/index.html',
//     default_icon: 'icon-34.png',
//   },
  chrome_url_overrides: {
    newtab: 'src/pages/newtab/index.html',
  },
  // icons: {
  //   128: 'icon-128.png',
  // },
//   content_scripts: [
    // {
    //   matches: ['http://*/*', 'https://*/*', '<all_urls>'],
    //   js: ['src/pages/content/index.js'],
      // KEY for cache invalidation
    //   css: ['assets/css/contentStyle<KEY>.chunk.css'],
    // },
//   ],
//   devtools_page: 'src/pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css'],
      matches: ['*://*/*'],
    },
  ],
}))

