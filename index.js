//const themes = require('jsonresume-themes-feed').getThemes()


const fs = require('fs')
const list = JSON.parse(fs.readFileSync('themes.json', 'utf8'))
const {fork} = require('child_process')
//const list = JSON.parse(fs.readFileSync('themes.json', 'utf8'))

async function main() {
  Object.entries(list).forEach(([key, theme]) => {
    const childProcess = fork('./worker.js')
    childProcess.send(theme)
    childProcess.on("message", message => {
      console.log("Received Message")
    })
  })
} main()

