const path = require('node:path')
const { app, BrowserWindow } = require('electron');

const isMac = process.platform === 'darwin';

function createMainWindow() {
    const mainwindow = new BrowserWindow({
        title: 'Desktop App',
        width: 800,
        height: 600,

    });

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

