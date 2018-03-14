'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import testConfig from '../config/testConfig'
import Input from '../lib/components/input'

describe('Builds a select', () => {
  let component
  let props

  before(() => {
    props = testConfig.selectInputSettings
    component = shallow(<Input {...props} />)
  })

  describe('Loads the expected element', () => {
    it('renders the select', () => {
      expect(component.find('select[name="options"]')).to.have.length(1)
    })
    it('loads all the options', () => {
      expect(component.find('option')).to.have.length(3)
    })
  })
})

describe('Builds an input', () => {
  let component
  let props

  before(() => {
    props = testConfig.textInputSettings
    component = shallow(<Input {...props} />)
  })

  describe('Loads the expected element', () => {
    it('renders the input', () => {
      expect(component.find('input[name="first_name"]')).to.have.length(1)
    })
  })
})

describe('Builds an textarea', () => {
  let component
  let props

  before(() => {
    props = testConfig.textAreaSettings
    component = shallow(<Input {...props} />)
  })

  describe('Loads the expected element', () => {
    it('renders the textarea', () => {
      expect(component.find('textarea[name="enquiry"]')).to.have.length(1)
    })
  })
})

describe('Builds a checkbox', () => {
  let component
  let props

  before(() => {
    props = testConfig.checkboxSettings
    component = shallow(<Input {...props} />)
  })

  describe('Loads the expected element', () => {
    it('renders the checkbox', () => {
      expect(component.find('input[type="checkbox"]')).to.have.length(1)
    })
  })
})

describe('Builds a hidden input', () => {
  let component
  let props

  before(() => {
    props = testConfig.hiddenInputSettings
    component = shallow(<Input {...props} />)
  })

  describe('Loads the expected element', () => {
    it('renders the hidden input', () => {
      expect(component.find('input[type="hidden"]')).to.have.length(1)
    })
  })
})

describe('Attempt to build an input without a type', () => {
  let component
  let props

  before(() => {
    props = testConfig.invalidInputSettings
    component = shallow(<Input {...props} />)
  })

  describe('Does not load an input', () => {
    it('No inputs to be seen', () => {
      expect(component.find('input')).to.have.length(0)
    })
  })
})

describe('Attempt to build a select without any options', () => {
  let component
  let props

  before(() => {
    props = testConfig.selectWithNoOptionsInputSettings
    component = shallow(<Input {...props} />)
  })

  describe('Does not load the select or any options', () => {
    it('No select to be seen', () => {
      expect(component.find('select')).to.have.length(0)
    })
    it('No options to be seen', () => {
      expect(component.find('option')).to.have.length(0)
    })
  })
})