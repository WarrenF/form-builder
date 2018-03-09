# form-builder

Example props to generate a form with a submit function
```onSubmit: function () {
    console.log('submitted')
  },
  submitClass: 'btn btn-primary',
  inputClass: 'form-builder-input',
  checkboxContainerClass: 'checkbox form-group',
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
      lastName: {
        type: 'text',
        label: 'Last Name',
        isRequired: true,
        attributes: {
          name: 'last_name',
          placeholder: 'Last Name',
          required: 'required'
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
  }```
