import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        {
          name: "vue",
          price: 998,
          count: 2,
          id: 1
        },
        {
          name: "react",
          price: 1888,
          count: 5,
          id: 2
        },
        {
          name: "angular",
          price: 888,
          count: 6,
          id: 3
        }
      ]
    };
  }
  addBook() {
    const newBook = {
      name: "java",
      price: 1999,
      count: 15,
      id: Math.random() * 1000
    };
    // 官方不推荐直接修改state引用数据,如果是继承pureComponent时，
    // render函数只有第一次修改时会被调用,
    // shouldComponentUpdate回调钩子中只做浅层数据对比
    // 即shallowEqual();
    // this.state.books.push(newBook);
    const books = [...this.state.books];
    books.push(newBook);
    this.setState({ books });
  }
  addClick(index) {
    const books = [...this.state.books];
    books[index].count++;
    this.setState({
      books
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
              <span>
                name: {item.name} -- price: {item.price} -- count: {item.count}{" "}
                -- id: {item.id}
              </span>
              <button onClick={() => this.addClick(index)}>+1</button>
            </li>
          );
        })}
        <button onClick={() => this.addBook()}>添加书籍</button>
      </div>
    );
  }
}
