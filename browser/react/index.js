'use strict';

console.log('Hello React');

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

const appRoot = document.getElementById('app');

ReactDOM.render(<Main />, appRoot);