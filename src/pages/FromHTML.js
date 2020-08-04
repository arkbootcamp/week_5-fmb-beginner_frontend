import React, { Component } from "react";
import "../styles/FromHTML.css";

class fromHTML extends Component {
  componentDidMount() {
    document.title = "HTML to React";
  }

  render() {
    return (
      <>
        <div>
          <h1 className="hello-header">Let's Try Styling</h1>
          <p className="header-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            nostrum.
          </p>
        </div>
        <p className="header-text outside">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          labore!
        </p>
        <form>
          <label style={{ display: "block" }}>Username</label>
          <input type="number" style={{ display: "block" }} />
        </form>
        <button
          className="submit-button"
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          Home React
        </button>
        <div className="box">
          <div className="small" style={{ alignSelf: "center" }}>
            box 1
          </div>
          <div className="small" style={{ flex: 2 }}>
            box 2
          </div>
          <div className="small" style={{ flex: 3 }}>
            box 3
          </div>
        </div>
      </>
    );
  }
}

export default fromHTML;
