const { execSync } = require('child_process')

process.on("message", theme => {
  console.log(theme.name)
  const result = installTheme(theme)
  process.send(result)
  process.exit()
})


async function installTheme(theme) {
  //execSync('npm install ' + theme.name)
  console.log(theme.name)
  return {
    installTheme: installTheme
  }
}