import React, { Component } from 'react'
import Input from './components/input'
import {object, func, string} from 'prop-types'

class FormBuilder extends Component {
  buildInputs () {
    const { inputs, cookies, inputClass } = this.props
    return Object.keys(inputs).map((key) => <Input key={key} cookies={cookies} inputSettings={inputs[key]} inputClass={inputClass} />)
  }

  render () {
    const { onSubmit, submitClass, submitText, formAction } = this.props
    const inputs = this.buildInputs()
    return (
      <form {...{ onSubmit, formAction }}>
        {inputs}
        <button type='submit' className={submitClass}>{submitText}</button>
      </form>
    )
  }
}

FormBuilder.propTypes = {
  onSubmit: func.isRequired,
  inputs: object,
  submitClass: string,
  submitText: string,
  inputClass: string,
  checkboxContainerClass: string,
  action: string,
  cookies: object
}

FormBuilder.defaultProps = {
  inputs: { },
  onSubmit: null,
  formAction: null,
  submitText: 'Submit',
  submitClass: 'btn btn-primary',
  inputClass: 'form-builder-input',
  checkboxContainerClass: 'checkbox form-group'
}

module.exports = FormBuilder
