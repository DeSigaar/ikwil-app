const workbox = require('workbox-build') // eslint-disable-line @typescript-eslint/no-var-requires

workbox
  .injectManifest({
    swSrc: 'src/sw.js',
    swDest: 'build/sw.js',
    globDirectory: 'build',
    globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],
  })
  .then(({ count, size, warnings }) => {
    warnings.forEach(console.warn) // eslint-disable-line no-console
    console.log(`${count} files will be precached, totaling ${size} bytes.`) // eslint-disable-line no-console
  })
  .catch(console.error) // eslint-disable-line no-console
