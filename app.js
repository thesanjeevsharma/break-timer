const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");
};

app.whenReady().then(createWindow);
