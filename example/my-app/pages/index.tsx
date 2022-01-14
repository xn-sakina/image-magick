import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'

import { useCallback, useEffect, useState } from 'react'
import image from '../public/cat.gif'

const Home: NextPage = () => {
  const imgUrl = image.src

  const [newUrl, setNewUrl] = useState('')

  const lookGifInfo = useCallback(async () => {
    const { buildInputFile, execute } = await import('@xn-sakina/image-magick')
    const { stdout, stderr, exitCode, outputFiles } = await execute({
      inputFiles: [await buildInputFile(imgUrl, 'image.gif')],
      commands: [
        `convert image.gif -coalesce -crop 140x140+160+70 +repage -resize 200x100! -layers optimize result.gif`,
      ],
    })
    const file = outputFiles?.[0]
    if (file?.blob) {
      setNewUrl(window.URL.createObjectURL(file.blob))
    }
  }, [])

  useEffect(() => {
    if (process.browser) {
      lookGifInfo()
    }
  }, [])

  return (
    <div style={{ margin: 20 }}>
      <div>
        origin:
        <img
          src={imgUrl}
          alt="gif"
          style={{
            width: 400,
          }}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        new:
        {newUrl && <img src={newUrl} alt="result-gif" style={{ width: 140 }} />}
      </div>
    </div>
  )
}

export default Home
