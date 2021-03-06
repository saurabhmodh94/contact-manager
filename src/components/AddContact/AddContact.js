import React, { Component } from 'react';
import uuid from 'uuid';
// import axios from 'axios';
import TextInputGroup from './../TextInputGroup/TextInputGroup';
// import { Consumer } from './../../context';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';

class AddContact extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.nameInput = React.createRef();
  // }
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // onSubmit = async (dispatch, e) => {
  onSubmit = e => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    // const name = this.nameInput.current.value;
    const new_contact = {
      id: uuid(),
      name,
      email,
      phone
    }; //ES6
    // Check For Errors or Use required
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }
    this.props.addContact(new_contact);
    // const response = await axios.post(
    //   `https://jsonplaceholder.typicode.com/users/`,
    //   new_contact
    // );
    // // .then(res => dispatch({ type: 'ADD_CONTACT', payload: new_contact }));
    // dispatch({ type: 'ADD_CONTACT', payload: response.data });

    // clear state
    // this.nameInput.current.value = '';
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    //redirect
    this.props.history.push('/');
  };
  static defaultProps = {
    name: ''
  };
  render() {
    const { name, email, phone } = this.state;
    // const { name } = this.props;

    // return (
    //   <Consumer>
    //     {value => {
    //       const { dispatch } = value;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
            <TextInputGroup
              label="Name"
              type="text"
              name="name"
              placeholder="Enter Name..."
              // defaultValue={name}
              // ref={this.nameInput}
              // ref="nameInput"
              value={name}
              onChange={this.onChange}
              error={this.state.errors.name}
            />
            <TextInputGroup
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Email..."
              value={email}
              onChange={this.onChange}
              error={this.state.errors.email}
            />
            <TextInputGroup
              label="Phone"
              type="text"
              name="phone"
              placeholder="Enter Phone..."
              value={phone}
              onChange={this.onChange}
              error={this.state.errors.phone}
            />
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
    //     }}
    //   </Consumer>
    // );
  }
}

export default connect(
  null,
  { addContact }
)(AddContact);
