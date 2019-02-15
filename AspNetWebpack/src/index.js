import _ from 'lodash';
import { Terminal } from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';

function component() {
  var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

let term = new Terminal();

term.open(document.getElementById('xterm-container'));
term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
term.fit();