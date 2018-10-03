import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class TextFieldOutlined extends Component {
  constructor(props) {
    super (props);
    this.state = {
      name: '',
    }
  }

  render() {
    const classes = this.props

    return (
      <TextField
          label="Nombre"
          className={classes.textField}
          type="text"
          name="name"
          // onChange={this.handleChange('name')}
          // onBlur={this.handleLeave('name', 'Nombre', 'required|string|max:20')}
          margin="normal"
          variant="outlined"
          autoFocus={true}
          // required={true}
          // fullWidth={true}
          value={this.props.name}
          error={this.props.errorDisplaysName}
          helperText={this.props.errorMessagesName}
          // helperText="{this.state.errorMessages.name}"
      />
    )
  }
}

export default TextFieldOutlined
