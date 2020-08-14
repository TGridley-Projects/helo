import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Nav extends Component {

    render() {
        return (
            <div>
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

export default Nav
