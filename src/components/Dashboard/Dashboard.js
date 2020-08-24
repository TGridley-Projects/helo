import React, { Component } from "react";
import "./Dashboard.css";
import search_logo from "../Assets/search_logo.png";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      checked: true,
      search: "",
      posts: {}
    };
  }

  handleCheck = () => {
    this.setState({ checked: !this.state.checked });
  };

  searchHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  resetSearch = (e) => {
    this.setState({
      search: "",
    });
  };

  

  render() {
    return (
      <div className="mainDashboard">
        <section className="searchBar">
          <section className="searchArea">
            <input
              className="searchInput"
              onChange={(e) => this.searchHandler(e)}
              type="text"
              placeholder="Search by Title"
              value={this.state.search}
            />
            <button className="searchButton">
              <img className="searchImage" src={search_logo} alt="search" />
            </button>
            <button
              className="searchReset"
              onClick={(e) => this.resetSearch(e)}
            >
              Reset
            </button>
          </section>
          <section className="myPosts">
            <label classname="checkboxLabel">
              My Posts
              <input
                className="checkbox"
                type="checkbox"
                onChange={this.handleCheck}
                defaultChecked={this.state.checked}
              />
            </label>
          </section>
        </section>
      </div>
    );
  }
}

export default Dashboard;
