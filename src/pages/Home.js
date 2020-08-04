import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "../styles/Home.css";
import Counter from "../components/Counter";
import Books from "../components/Books";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      booksName: "Harry Potter - The Deathly Hallows",
      title: "Home React",
    };
    document.title = this.state.title;
  }

  componentDidMount = () => {
    // console.log("did mount");
    // console.log(this.state);
    // document.title = this.state.booksName;
    const URLString = `${process.env.REACT_APP_API_URL}/books`;
    setTimeout(() => {
      Axios.get(URLString)
        .then((res) => {
          this.setState({
            books: res.data.data,
          });
        })
        .catch((err) => console.log(err));
    }, 2000);
  };

  componentDidUpdate = () => {
    // console.log("did update");
    // document.title = this.state.booksName;
    if (this.state.booksName === "Naruto") {
      this.setState({
        booksName: "Tolong cari judul buku lain",
      });
    }
  };

  shouldComponentUpdate = () => {
    // console.log("should update");
    return true;
  };

  render() {
    // const searchParams = decodeURI(this.props.location.search);
    // console.log(this.props.location);
    // console.log(searchParams.replace("?", "").split("&"));
    return (
      <>
        <h1>Welcome to My Web</h1>
        <p>{this.state.booksName}</p>
        <input
          type="text"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              this.setState({
                booksName: event.target.value,
              });
            }
          }}
        />
        <button
          onClick={() => {
            this.setState({
              booksName: "Naruto",
            });
          }}
        >
          Ganti Buku
        </button>
        <Counter counterNumber={1} name="Male" bg="aqua" />
        <Counter counterNumber={2} name="Female" bg="golden" />
        <Counter counterNumber={3} name="Counter" />
        <div className="counter-wrapper flex-center">
          <Link to="/html">
            <button>Navigasi</button>
          </Link>
        </div>
        <Books arrBooks={this.state.books} />
      </>
    );
  }
}

export default Home;
