import React, {Component} from 'react';
import Axios from 'axios';

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            profile_pic: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = () => {
        const {username, password} = this.state;
        const profile_pic = `robohash.org/${username}`
        Axios.post('/auth/register', {username, password, profile_pic}).then(res => {
            console.log(res.data)
            this.props.addUser(res.data)
           
            return null
        }).catch(err =>{console.log(err);
            alert('Registration Failed')
        })
    }


    render(){
        const {username, password} = this.state;
        return(
            <div>
                <input onChange={e => this.changeHandler(e)} name='username' type='text' value={username} placeholder='User Name' />
                <input onChange={e => this.changeHandler(e)} name='password' type='password' value={password} placeholder='Password' />
            <button>Login</button>
            <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default Auth