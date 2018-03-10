# form-builder

Example props to generate a form with a submit function
```
{
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
