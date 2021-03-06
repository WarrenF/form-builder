'use strict'

var React = require('react')
var ReactDOM = require('react-dom')
var FormBuilder = require('../app/index')
var props = require('../config/previewProps')

ReactDOM.render(<FormBuilder {...props} />, document.getElementById('root'))
