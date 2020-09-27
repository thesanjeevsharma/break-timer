const { app, BrowserWindow, Menu } = require("electron");

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

const dockMenu = Menu.buildFromTemplate([
  {
    label: "Quit",
    click() {
      app.quit();
    },
  },
]);

if (process.platform === "darwin") {
  app.dock.setMenu(dockMenu);
}

app.whenReady().then(createWindow);
