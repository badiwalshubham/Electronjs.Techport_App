const path = require('node:path')
const { app, BrowserWindow } = require('electron');

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

function createMainWindow() {
    const mainwindow = new BrowserWindow({
        title: 'Desktop App',
        width: isDev ? 1000 : 500,
        height: 600,

    });

    // Open devtolls if in dev environment
    if (isDev) {
        mainwindow.webContents.openDevTools();
    }

    mainwindow.loadFile(path.join(__dirname, './Renderer/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    })

});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

