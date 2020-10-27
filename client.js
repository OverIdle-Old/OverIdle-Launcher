const {app, BrowserWindow} = require("electron")
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    minWidth: 900,
    minHeight: 600,
    icon: path.join(__dirname, "public/icons/appico.ico"),
    frame: false,
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

