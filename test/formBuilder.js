'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import testConfig from '../config/testConfig'
import FormBuilder from '../lib'

describe('Inputs', () => {
  let component
  let props

  before(() => {
    props = testConfig.allProps
    component = shallow(<FormBuilder {...props} />)
  })

  describe('Loads the expected elements', () => {
    it('has the form element', () => {
      expect(component.find('form')).to.have.length(1)
    })
    it('has the submit button', () => {
      expect(component.find('button')).to.have.length(1)
    })
  })
})
