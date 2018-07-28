import React, { Component } from 'react'
import { object, string } from 'prop-types'

class Input extends Component {
  buildInput (inputSettings) {
    const {inputClass} = this.props
    return (
      <div className='form-group'>
        {inputSettings.label && (
          <label>{inputSettings.label}</label>
        )}
        <input {...inputSettings.attributes} type={inputSettings.type} className={inputClass + ' form-control'} />
      </div>
    )
  }

  buildHiddenInput (inputSettings) {
    const { attributes, type } = inputSettings
    const {inputClass} = this.props
    return (
      <input className={inputClass} {...attributes} type={type} />
    )
  }

  makeSelectOptions (options) {
    return Object.keys(options).map((key) => {
      return (
        <option key={key}value={key}>{options[key]}</option>
      )
    })
  }

  buildSelect (inputSettings) {
    const {label, attributes, type, options} = inputSettings
    if (!options) return null
    const {inputClass} = this.props
    return (
      <div className='form-group'>
        {label && (
          <label>{label}</label>
        )}
        <select {...attributes}type={type} className={inputClass + ' form-control'}>
          {this.makeSelectOptions(options)}
        </select>
      </div>
    )
  }

  buildTextArea (inputSettings) {
    const { label, attributes } = inputSettings
    const {inputClass} = this.props
    return (
      <div className='form-group'>
        {label && (
          <label>{label}</label>
        )}
        <textarea {...attributes} className={inputClass + ' form-control'} />
      </div>
    )
  }

  buildCheckBox (inputSettings) {
    const { label = '', attributes, type } = inputSettings
    const {inputClass} = this.props
    return (
      <div className='checkbox form-group'>
        <label>
          <input className={inputClass} {...attributes}type={type} />{label}
        </label>
      </div>
    )
  }

  render () {
    const {inputSettings} = this.props
    if (!inputSettings.type) return null
    switch (inputSettings.type) {
      case 'text':
      case 'email':
      case 'number':
      case 'password':
      case 'file':
      case 'range':
        return this.buildInput(inputSettings)
      case 'hidden':
        return this.buildHiddenInput(inputSettings)
      case 'textarea':
        return this.buildTextArea(inputSettings)
      case 'select':
        return this.buildSelect(inputSettings)
      case 'checkbox':
        return this.buildCheckBox(inputSettings)
    }
  }
}

Input.propTypes = {
  inputSettings: object.isRequired,
  inputClass: string.isRequired
}

export default Input
