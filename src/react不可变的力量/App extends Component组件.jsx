import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          name: "vue",
          price: 998,
          count: 2
        },
        {
          name: "react",
          price: 1888,
          count: 5
        },
        {
          name: "angular",
          price: 888,
          count: 6
        }
      ]
    };
  }
  addBook() {
    const newBook = {
      name: "java",
      price: 1999,
      count: 15
    };
    this.state.books.push(newBook);
    this.setState({
      bookes: this.state.books
    });
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <h2>数据列表:</h2>
        {books.map((item, index) => {
          return (
            <li key={index}>
              name: {item.name} -- price: {item.price} -- count: {item.count}
            </li>
          );
        })}
        <button onClick={() => this.addBook()}>添加书籍</button>
      </div>
    );
  }
}
