'use strict';

require('./index.html');
const Elm = require('./../app/App.elm');

Elm.App.embed( document.getElementById( 'app' ) );
