import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";
import home_logo from "../Assets/home_logo.png";
import new_logo from "../Assets/new_logo.png";
import shut_down from "../Assets/shut_down.png";

class Nav extends Component {
  render() {
    return (
      <div className="mainNav">
        <img
          className="profilePic"
          src={this.props.profile_pic}
          alt="profile"
        />
        <h3>{this.props.username}</h3>
        <section className="buttons">
          <section className="homeNew">
            <Link to="/dashboard">
              <img className="homeButton" src={home_logo} alt="home" />
            </Link>
            <Link to="/new">
              <img className="newPostButton" src={new_logo} alt="new post" />
            </Link>
          </section>
          <section className="logout">
            <Link to="/">
              <img className="logoutButton" src={shut_down} alt="logout" />
            </Link>
          </section>
        </section>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log(reduxState);
  return {
    username: reduxState.user.username,
    profile_pic: reduxState.user.profile_pic,
  };
}

export default connect(mapStateToProps)(Nav);
