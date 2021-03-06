import React from "react";

const Books = ({ arrBooks, isShow }) => {
  //   const { arrBooks } = props;
  //   console.log(arrBooks);
  //   if (arrBooks.length) {
  //     return (
  //       <>
  //         <h1>Here are the Books</h1>
  //         <p>{JSON.stringify(arrBooks)}</p>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <h1>Here are the Books</h1>
  //         <p>Loading</p>
  //       </>
  //     );
  //   }

  const arrToLi = () => {
    const bookList = arrBooks.map((book, index) => {
      return <li key={index}>{`${book.book_title} (${book.book_author})`}</li>;
    });
    console.log(bookList);
    return bookList;
  };
  // Ternary Operator / Short Circuit Logic
  // Condition ? if true : if false
  return (
    // <div className={isShow ? "book-wrapper" : "book-wrapper hidden"}>
    <div className="book-wrapper">
      <h1 className="books">Here are the Books</h1>
      {arrBooks.length ? <ol>{arrToLi()}</ol> : <h2>Loading...</h2>}
    </div>
  );
};

export default Books;
