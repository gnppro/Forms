import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import TextFieldOutlined from './components/TextFieldOutlined';
import TextFieldAdapter from './components/TextFieldAdapter';

const required = value => (value ? undefined : "Required");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <h2>Simple Default Input</h2>
              <div>
                <label>First Name</label>
                <Field name="firstName" component="input" placeholder="First Name" />
              </div>

              <h2>An Arbitrary Reusable Input Component</h2>
              <div>
                <Field 
                  name="name" 
                  component={TextFieldOutlined}
                />
              </div>
              <div>
              <Field
                name="firstName"
                component={TextFieldAdapter}
                validate={required}
                placeholder="First"
                label="First Name"
                // helperText="Hola Helpme"
              />
              </div>
              <div>
              <Field 
                name="lastName" 
                validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>Last Name</label>
                      <input {...input} type="text" placeholder="Last Name" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
              </Field>
              </div>

              <h2>Render Function</h2>
              <Field
                name="bio"
                render={({ input, meta }) => (
                  <div>
                    <label>Bio</label>
                    <textarea {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <h2>Render Function as Children</h2>
              <Field name="phone">
                {({ input, meta }) => (
                  <div>
                    <label>Phone</label>
                    <input type="text" {...input} placeholder="Phone" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <button type="submit" disabled={pristine || invalid}>
                Submit
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default App;
