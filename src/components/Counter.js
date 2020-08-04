import React from "react";

class Counter extends React.Component {
  state = {
    number: 0,
  };

  incNumber = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  decNumber = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    // console.log(this.props.counterNumber);
    return (
      <div className={`counter-wrapper bg-${this.props.bg}`}>
        <h3>
          {this.props.name} {this.props.counterNumber}
        </h3>
        <button onClick={this.decNumber}>-</button>
        <p className="inline-p">{this.state.number}</p>
        <button onClick={this.incNumber}>+</button>
      </div>
    );
  }
}

export default Counter;
