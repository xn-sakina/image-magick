import 'zx/globals'

const wasmPath = path.resolve(__dirname, '../lib/bundles/magick.wasm')
const targetPath = path.resolve(__dirname, '../src/magick/magick.core.js')

const transformWasm = async () => {
  const base64 = fs.readFileSync(wasmPath, { encoding: 'base64' })

  fs.writeFileSync(
    targetPath,
    `
export const wasmBase64 = "data:application/octet-stream;base64,${base64}"
  `.trim(),
    { encoding: 'utf-8' }
  )
}

transformWasm()
