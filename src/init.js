const fs = require("fs");
const fileName = 'commit.config.js'
const rootPath = process.cwd()

const promise = (fn, data) => new Promise(resolve => {
  fn(resolve, data)
})

const writeFile = (resolve, data) => {
  fs.writeFile(`${rootPath}/${fileName}`, data, 'utf8', (err) => {
    if (err) {
      console.log(err)
    } else {
      resolve()
    }
  })
}

const readFile = resolve => {
  fs.readFile(`${__dirname}/config.js`, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      resolve(data)
    }
  })
}

const init = async () => {
  console.log('\x1B[33m', 'Initializing configuration file ...')
  const configstring = await promise(readFile)
  await promise(writeFile, configstring)
  console.log('\x1B[32m', 'Successful !')
}


init()