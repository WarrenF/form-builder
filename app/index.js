'use strict'

import React, { Component } from 'react'
import Input from './components/input'
import {object, func, string} from 'prop-types'

class FormBuilder extends Component {
  buildInputs () {
    const {inputs, cookies, inputClass} = this.props
    return Object.keys(inputs).map((key) => <Input key={key} cookies={cookies} inputSettings={inputs[key]} inputClass={inputClass} />)
  }

  render () {
    const {onSubmit, submitClass, submitText, formAction} = this.props
    const formProps = {}
    if (onSubmit) formProps.onSubmit = onSubmit
    if (formAction) formProps.formAction = formAction
    return (
      <form {...formProps}>
        {this.buildInputs()}
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
  submitText: 'Submit',
  submitClass: 'btn btn-primary',
  inputClass: 'form-builder-input',
  checkboxContainerClass: 'checkbox form-group'
}

export default FormBuilder
