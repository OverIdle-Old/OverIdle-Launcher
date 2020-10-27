const {app, BrowserWindow} = require("electron")
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 950,
    height: 700,
    icon: path.join(__dirname, "public/icons/appico.ico"),
    frame: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile(path.join(__dirname, 'src/app.html'))
  win.removeMenu()
  //win.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

