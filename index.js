import './apps/style/style.css';

const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');
import 'php';
import { Component } from 'react';
import Port from 'port';
import { Server } from 'http';
import 'network';
const { Gui } = require('./apps/orders/GUI/legen/Home.vue');

REACT.PHPCODE {
  render(){
    return(
      GET_COOKIE[$_COOKIE.created = accountLogin = true else accountLogin = false]
    )
  }
}
let win;
let Network = "host: localhost:varnet-pc:network-storage:server/host.sh";

function createWindow() {
  win = new BrowserWindow({
    width: 700,
    height: 500
  });

  win.loadURL(url.format({
    pathname: path.join(app()),
    protocol: 'file:',
    slashes: true
  }));
}

class app extends React.Component {
  render() {
    Gui()
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

function render_split() {
  Port.AcceptArgument();
  Port.myClient();
}

function myClient() {
  Port.network_address = [Network];
  Server.on(() => {
    console.log("Server Runned");
  });

  if (Server.onElse) {
    console.log("Server Alerdy Runned");
  } else if (Server.stopElse) {
    console.log("Server Alerdy Stopped");
  }
}
