# Simple React Form Builder
Build simple forms with bootstrap 3 markup using config files within react.

## Requires REACT 16

## Example useage:
`Example index.js`
```
import FormBuilder from 'simple-react-form-builder'
const formProps = require('/path/to/formConfig.js')

render () {
  return(
    <FormBuilder {...formProps} />
  )
}
```

## Example props to generate a form with a submit function that serializes form data
`Example formConfig.js`
```
const expires = new Date()
expires.setDate(expires.getDate() + 14)

module.exports = {
  submitClass: 'btn btn-primary',
  submitText: 'Send!',
  inputClass: 'form-builder-input',
  checkboxContainerClass: 'checkbox form-group',
  formAction: 'javascript:void(0)',
  onSubmit: function (e) {
    const formInputs = e.target.querySelectorAll('.form-builder-input')
    const submitObject = {}
    Object.keys(formInputs).forEach(key => {
      const item = formInputs[key]
      if (!item.name) return
      if (item.type === 'checkbox') submitObject[item.name] = item.checked
      else submitObject[item.name] = item.value
    })
    console.log(submitObject)
  },
  cookies: {
    namePrefix: 'example_cookies',
    path: '/',
    expires
  },
  inputs: {
    firstName: {
      type: 'text',
      label: 'First Name',
      attributes: {
        name: 'first_name',
        placeholder: 'First Name',
        required: 'required',
        defaultValue: 'Waza'
      }
    },
    RoomType: {
      type: 'select',
      label: 'Options',
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
    test: {
      type: 'hidden',
      attributes: {
        name: 'hidden_input',
        required: 'required',
        value: '1'
      }
    },
    yourEmail: {
      type: 'email',
      label: 'Your Email',
      attributes: {
        name: 'email',
        placeholder: 'Your Email Address',
        required: 'required'
      }
    },
    enquiry: {
      type: 'textarea',
      label: 'Enquiry',
      attributes: {
        name: 'enquiry',
        rows: 3,
        required: 'required'
      }
    },
    signup: {
      type: 'checkbox',
      label: 'Signup to our newsletter',
      attributes: {
        name: 'newsletter',
        defaultChecked: false
      }
    }
  }
}
```

## Optional Props for customisation:
If you want to include cookies you can use the `cookies` prop, everything in the cookies object is optional apart from namePrefix which is required.  Your cookies will be named like this `${cookies.namePrefix}_${name of input}`  if your input does not have a name, then no cookie will be stored for it.
```
{
  cookies: {
    namePrefix: 'example_cookies',
    path: '/',
    expires,
    maxAge: 1000,
    domain: 'https://example-domain.com',
    secure: true,
    httpOnly: false
  },
  onSubmit: func, // Function to run when the form submits
  submitText: 'Send', // Defaults to 'Submit'
  formAction: '/where-to-submit.html',
  submitClass: 'btn btn-primary', // Goes onto the submit button
  inputClass: 'form-builder-input', // This class gets applied to all inputs generated
  checkboxContainerClass: 'checkbox form-group' // This class gets applied to checkbox containers
}
```
