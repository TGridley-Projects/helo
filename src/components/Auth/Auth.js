import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { addUser } from '../../redux/reducer';
import './Auth.css';
import helo_face from'../Assets/helo_face.png'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      profile_pic: '',
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  register = () => {
    const { username, password } = this.state;
    const profile_pic = `robohash.org/${username}`;
    Axios.post('/auth/register', { username, password, profile_pic })
      .then((res) => {
        this.props.addUser(res.data);
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        console.log(err);
        alert('Registration Failed');
      });
  };

  login = () =>{
    const { username, password } = this.state;
    Axios.post('/auth/login', { username, password })
    .then((res) => {
      this.props.getUser();
      this.props.history.push('/dashboard')
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <section className='center'>
          <img src={helo_face} alt='Helo Face'/>
          <h1>Helo</h1>
          <section className='inputShared'>
            <h4>Username:</h4>
            <input
              onChange={(e) => this.changeHandler(e)}
              name='username'
              type='text'
              value={username}
            />
          </section>
          <section className='inputShared'>
              <h4>Password:</h4>
            <input
              onChange={(e) => this.changeHandler(e)}
              name='password'
              type='password'
              value={password}
            />
          </section>
          <section className='authButtons'>
          <button>Login</button>
          <button onClick={this.register}>Register</button>
          </section>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.user,
  };
};

export default connect(mapStateToProps, { addUser })(Auth);
