const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        // width and height
        width: 800,
        height: 600,
        // top bar
        autoHideMenuBar: true,
        // dev tools
        webPreferences: {
            devTools: true
        }
    })

    const indexFilePath = path.join(__dirname, './src/pages/index.html')
    win.loadFile(indexFilePath)
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})