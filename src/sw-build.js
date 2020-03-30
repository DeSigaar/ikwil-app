/* eslint-disable */
const workboxBuild = require('workbox-build')

const buildSW = () => {
  return workboxBuild
    .injectManifest({
      swSrc: 'src/sw.js',
      swDest: 'build/sw.js',
      globDirectory: 'build',
      globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],
    })
    .then(({ count, size, warnings }) => {
      warnings.forEach(console.warn)
      console.log(`${count} files will be precached, totaling ${size} bytes.`)
    })
    .catch((err) => {
      console.error(err)
    })
}
buildSW()
