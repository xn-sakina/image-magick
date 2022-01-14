# @xn-sakina/image-magick

Easy use [WASM-ImageMagick](https://github.com/KnicKnic/WASM-ImageMagick) process image utils for webpack.

> *Not need care about wasm load process*

## Install

```bash
  pnpm add @xn-sakina/image-magick
```

## Usage

Everything is the same as [WASM-ImageMagick](https://github.com/KnicKnic/WASM-ImageMagick)

See [example](./example/my-app/pages/index.tsx).

```ts
// example

import { buildInputFile, execute } from '@xn-sakina/image-magick'

const { stdout, stderr, exitCode, outputFiles } = await execute({
  inputFiles: [await buildInputFile(imgUrl, "image.gif")],
  commands: [
    `convert image.gif -coalesce -crop 140x140+160+70 +repage -resize 200x100! -layers optimize result.gif`,
  ],
});
```

## License

MIT
