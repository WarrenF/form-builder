import React, { Component } from 'react'
import { oneOfType, bool, object, string } from 'prop-types'
import cookie from 'react-cookies'

class Input extends Component {
  constructor (props) {
    super(props)
    let state = {
      value: props.defaultValue || props.value || '',
      attributes: { }
    }
    const { attributes = { } } = props.inputSettings
    Object.keys(attributes).forEach(key => {
      if (!/value|defaultValue/.test(key)) state.attributes[key] = attributes[key]
    })
    this.state = state
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    // Check if cookies are enabled, then load them in
    const { cookies } = this.props
    const { attributes: { name } } = this.state
    if (!cookies || !name) return
    const value = cookie.load(`${cookies.namePrefix}_${name}`)
    if (value) this.setState({value})
  }

  storeCookie () {
    // Each time the component updates, store the value as a cookie if cookies are enabled
    const { cookies } = this.props
    if (!cookies || !cookies.namePrefix) return
    const { namePrefix, path = '/', expires, maxAge, domain, secure, httpOnly } = cookies
    const { value, attributes: { name } } = this.state
    if (name && value) cookie.save(`${namePrefix}_${name}`, value, { path, expires, maxAge, domain, secure, httpOnly })
  }

  handleChange (e) {
    const { value } = e.target
    this.setState({ value }, this.storeCookie)
  }

  buildInput (inputSettings) {
    const { attributes, value } = this.state
    const { inputClass } = this.props
    return (
      <div className='form-group'>
        {inputSettings.label && (
          <label>{inputSettings.label}</label>
        )}
        <input {...attributes} type={inputSettings.type} className={inputClass + ' form-control'} value={value} onChange={this.handleChange} />
      </div>
    )
  }

  buildHiddenInput (inputSettings) {
    const { inputClass } = this.props
    const { attributes } = this.state
    return (
      <input className={inputClass} {...attributes} type={inputSettings.type} />
    )
  }

  makeSelectOptions (options) {
    return Object.keys(options).map(key => {
      return (
        <option key={key} value={key}>{options[key]}</option>
      )
    })
  }

  buildSelect (inputSettings) {
    const { attributes, value } = this.state
    const { label, type, options } = inputSettings
    if (!options) return null
    const { inputClass } = this.props
    const selectOptions = this.makeSelectOptions(options)
    return (
      <div className='form-group'>
        {label && (
          <label>{label}</label>
        )}
        <select {...attributes} type={type} className={inputClass + ' form-control'} onChange={this.handleChange} value={value}>
          {selectOptions}
        </select>
      </div>
    )
  }

  buildTextArea (inputSettings) {
    const { attributes, value } = this.state
    const { label } = inputSettings
    const { inputClass } = this.props
    return (
      <div className='form-group'>
        {label && (
          <label>{label}</label>
        )}
        <textarea {...attributes} className={inputClass + ' form-control'} onChange={this.handleChange} value={value} />
      </div>
    )
  }

  buildCheckBox (inputSettings) {
    const { attributes } = this.state
    const { label = '', type } = inputSettings
    const { inputClass } = this.props
    return (
      <div className='checkbox form-group'>
        <label>
          <input className={inputClass} {...attributes} type={type} onChange={this.handleChange} />{label}
        </label>
      </div>
    )
  }

  render () {
    const { inputSettings } = this.props
    if (!inputSettings.type) return null
    switch (inputSettings.type) {
      case 'hidden':
        return this.buildHiddenInput(inputSettings)
      case 'textarea':
        return this.buildTextArea(inputSettings)
      case 'select':
        return this.buildSelect(inputSettings)
      case 'checkbox':
        return this.buildCheckBox(inputSettings)
      default:
        return this.buildInput(inputSettings)
    }
  }
}

Input.defaultProps = {
  cookies: false,
  inputSettings: { }
}

Input.propTypes = {
  inputSettings: object.isRequired,
  inputClass: string.isRequired,
  cookies: oneOfType([bool, object])
}

export default Input
