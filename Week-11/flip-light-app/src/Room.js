import React from "react";
import { connect } from "react-redux";

class Room extends React.Component {
  // state = {
  //   isLightOn: true
  // };

  flipLight = () => {
    this.props.dispatch({
      type: "FLIP_LIGHT"
    });
  };

  render() {
    const lightedness = this.props.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLightOn: state.isLightOn
  };
};

export default connect(mapStateToProps)(Room);
