import React, {Component} from 'react';
import Axios from 'axios';

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = () => {
        const {username, password} = this.state;
        Axios.post('/auth/register', {username, password}).then(res => {
            // this.props.loginUser(res.data)
            // this.props.history.push('/dashboard')
        }).catch(err =>{console.log(err);
            alert('Registration Failed')
        })
    }


    render(){
        const {username, password} = this.state;
        return(
            <div>
                <input onChange={e => this.changeHandler(e)} name='username' type='text' value={username} placeholder='User Name' />
                <input onChange={e => this.changeHandler(e)} name='password' type='text' value={password} placeholder='Password' />
            <button>Login</button>
            <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default Auth