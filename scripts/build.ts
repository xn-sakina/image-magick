import 'zx/globals'

const build = async () => {
  await $`tsc`

  const unusedCoreDTSPath = path.resolve(
    __dirname,
    '../dist/magick/magick.core.d.ts'
  )
  await fs.remove(unusedCoreDTSPath)

  console.log(chalk.green(`build success`))
}

build()
