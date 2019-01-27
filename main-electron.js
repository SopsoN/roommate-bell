const { app, BrowserWindow, Tray } = require('electron');

let win;

function createWindow ()
{
  win = new BrowserWindow({
    width: 300,
    height: 400,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`,
    title: "Roommate Bell",
    resizable: false,
    maximizable: false,
    fullscreenable: false,
  });

  win.loadURL(`file://${__dirname}/dist/roommate-bell/index.html`);

  win.on('closed', function () {
    win = null
  });

  createTrayIcon();
}

function createTrayIcon()
{
  var image = nativeImage.createFromPath(`file://${__dirname}/dist/roommate-bell/assets/logo.png`);

  image.setTemplateImage(true);

  tray = new Tray(image);
  tray.setToolTip("No running tasks");
  tray.on('click', function() {
    if(!win.isVisible()) {
      win.show();
      win.focus();
    }
    else {
      win.focus();
    }
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function ()
{
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function ()
{
  if (win === null) {
    createWindow();
  }
});
