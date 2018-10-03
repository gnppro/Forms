import React from 'react'
import { Form, Field } from 'react-final-form'
import TextField from 'material-ui/TextField'


const TextFieldAdapter = ({ input, meta, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    onChange={(event, value) => input.onChange(value)}
    errorText={meta.touched ? meta.error : ''}
  />
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const required = value => (value ? undefined : 'Required')

const TextFieldAdapted = () => (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="firstName"
                component={TextFieldAdapter}
                validate={required}
                hintText="First"
                floatingLabelText="First Name"
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Log In
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={submitting || pristine}>
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
)

// render(<App />, document.getElementById('root'))
export default TextFieldAdapted