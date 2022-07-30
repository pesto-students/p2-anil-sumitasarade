import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  reset = () => {
    this.props.dispatch({
      type: "RESET"
    });
  };

  render() {
    return (
      <div className="App mt-5">
        <h2>You've walked {this.props.count} steps today!</h2>
        <button onClick={this.increment}>Add a step</button>
        <br />
        <br />
        <button onClick={this.reset}>Reset Steps</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
