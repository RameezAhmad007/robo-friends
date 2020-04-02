import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import "tachyons";
import { connect } from "react-redux";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";
import { onSearchChange, onRequestRobots } from "./actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
    errorStatus: state.requestRobots.errorStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(onSearchChange(event.target.value)),
    onRequestRobots: () => onRequestRobots(dispatch)
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  render() {
    const {
      searchField,
      onSearchChange,
      robots,
      isPending,
      errorStatus
    } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    console.log("Error Status : ", errorStatus);

    return (
      <div className="App tc">
        {isPending ? (
          <h1>Loading</h1>
        ) : errorStatus ? (
          <h1>Error</h1>
        ) : (
          <div>
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} value={searchField} />
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filteredRobots} />
              </ErrorBoundry>
            </Scroll>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
