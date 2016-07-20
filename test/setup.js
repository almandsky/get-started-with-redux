import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body><div id="root"></div></body></html>');
global.window = document.defaultView;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
