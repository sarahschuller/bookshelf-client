import React from "react";
import Shelf from "./Shelf";
import Book from "./Book";
import Library from "./Library";
import Header from "./Header";

class App extends React.Component {
  state = {
    books: {},
    library: {},
  };

  addBook = book => {
    const books = { ...this.state.books };
    books[`book${Date.now()}`] = book;
    this.setState({ books });
  };

  updateBook = (key, updatedBook) => {
    // 1. Take a copy of the current state
    const books = { ...this.state.books };
    // 2. Update that state
    books[key] = updatedBook;
    // 3. Set that to state
    this.setState({ books });
  };

render() {
  return (
    <div className="Main">
    <Header />
    <div className="App">
      <Shelf
        addBook={this.addBook}
        updateBook={this.updateBook}
        books={this.state.books}
        />
      <Library />
    </div>
    </div>
  );
};
}  
  

export default App;
