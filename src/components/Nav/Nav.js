import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


export class Nav extends Component {

    render() {
        return (
            <div>
                {console.log(this.props, 'Nav props')}
                <Link to = '/dashboard'>
                <button>Home</button>
                </Link>
                <Link to = '/new'>
                <button onClick={(e) => {}}>New Post</button>
                </Link>
                <Link to = '/'>
                <button onClick={(e) => {}}>Logout</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) =>{
    // const {username, profile_pic} = reduxState.user
console.log(reduxState)
}

export default connect(mapStateToProps)(Nav)
