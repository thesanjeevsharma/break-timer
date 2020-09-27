process.env.NODE_ENV = "development";
const { app, BrowserWindow, Menu } = require("electron");

const isMac = process.platform === "darwin";

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 500,
    height: 400,
    title: "Break Timer",
    resizable: false,
    transparent: true,
    icon: "icons/logo.png",
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  if (isMac) {
    app.dock.setMenu(dockMenu);
  }
};

const dockMenu = Menu.buildFromTemplate([
  {
    label: "Quit",
    click() {
      app.quit();
    },
  },
]);

const template = [
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            {
              label: "Star on GitHub",
              click: async () => {
                const { shell } = require("electron");
                await shell.openExternal(
                  "https://github.com/thesanjeevsharma/break-timer"
                );
              },
            },
          ],
        },
      ]
    : []),
  {
    label: "File",
    submenu: [
      {
        label: "Exit",
        accelerator: "Esc",
        click() {
          win.hide();
        },
      },
      {
        label: "Quit",
        accelerator: isMac ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
  {
    role: "help",
    submenu: [
      {
        label: "GitHub",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal(
            "https://github.com/thesanjeevsharma/break-timer"
          );
        },
      },
    ],
  },
];

app.whenReady().then(createWindow);
