*Simple React Form Builder*
Build simple forms with bootstrap 3 markup using config files within react.

*Example useage:*
`Example index.js`
```
const FormBuilder = require('simple-react-form-builder')
const formProps = require('/path/to/formConfig.js')

render () {
  return(
    <FormBuilder {...formProps} />
  )
}
```

*Example props to generate a form with a submit function that serializes form data*
`Example formConfig.js`
```
module.exports = {
  onSubmit: function (e) {
    const formInputs = e.target.querySelectorAll('.form-builder-input')
    const submitObject = {}
    Object.keys(formInputs).map((key) => {
      const item = formInputs[key]
      if (!item.name || item.name === '') return
      if (item.type === 'checkbox') submitObject[item.name] = item.checked
      else submitObject[item.name] = item.value
    })
    console.log(submitObject)
  },
  formSettings: {
    inputs: {
      firstName: {
        type: 'text',
        label: 'First Name',
        attributes: {
          name: 'first_name',
          placeholder: 'First Name',
          required: 'required'
        }
      },
      RoomType: {
        type: 'select',
        label: 'Options',
        isRequired: true,
        attributes: {
          name: 'options',
          placeholder: 'Options',
          defaultValue: '2'
        },
        options: {
          '1': 'One',
          '2': 'Two',
          '3': 'Three'
        }
      },
      yourEmail: {
        type: 'email',
        label: 'Your Email',
        isRequired: true,
        attributes: {
          name: 'email',
          placeholder: 'Your Email Address',
          required: 'required'
        }
      },
      enquiry: {
        type: 'textarea',
        label: 'Enquiry',
        isRequired: true,
        attributes: {
          name: 'enquiry',
          rows: 3,
          required: 'required'
        }
      },
      signup: {
        type: 'checkbox',
        label: 'Signup to our newsletter',
        isRequired: false,
        attributes: {
          name: 'newsletter',
          defaultChecked: false
        }
      }
    }
  }
}
```

Optional Props for customisation:
```
{
  submitClass: 'btn btn-primary', //Goes onto the submit button
  inputClass: 'form-builder-input', //This class gets applied to all inputs generated
  checkboxContainerClass: 'checkbox form-group' //This class gets applied to checkbox containers
}
```
