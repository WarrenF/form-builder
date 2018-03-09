'use strict'

import React, { Component } from 'react'
import Input from './components/input'
import { object, func, string } from 'prop-types'

class FormBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false
    }
  }

  buildInputs () {
    const {formSettings, inputClass} = this.props
    const {inputs} = formSettings
    return Object.keys(inputs).map((key) => {
      return (
        <Input key={key} inputSettings={inputs[key]} inputClass={inputClass} />
      )
    })
  }

  render () {
    const allInputs = this.buildInputs()
    const { onSubmit, submitClass } = this.props
    return (
      <form action='javascript:void(0)' onSubmit={onSubmit}>
        {allInputs}
        <button type='submit' className={submitClass}>Submit</button>
      </form>
    )
  }
}

FormBuilder.propTypes = {
  onSubmit: func.isRequired,
  formSettings: object.isRequired,
  submitClass: string,
  inputClass: string,
  checkboxContainerClass: string
}

FormBuilder.defaultProps = {
  submitClass: 'btn btn-primary',
  inputClass: 'form-builder-input',
  checkboxContainerClass: 'checkbox form-group'
}

export default FormBuilder
