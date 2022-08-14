import React from "react";
import Shelf from "./Shelf";
import Book from "./Book";
import Library from "./Library";
import Header from "./Header";
import sampleBooks from "../sample-books";

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

  loadSampleBooks = () => {
    this.setState({ books: sampleBooks });
    console.log(books)
  };

  addToLibrary = key => {
    // 1. take a copy of state
    const library = { ...this.state.library };
    // 2. Either add to the library, or update the number in our library
    library[key] = library[key];
    // 3. Call setState to update our state object
    this.setState({ library });
  };

render() {
  return (
    <div className="Main">
    <Header />
    <div className="App">
      <div>
      <Shelf
        addBook={this.addBook}
        updateBook={this.updateBook}
        loadSampleBooks={this.loadSampleBooks}
        books={this.state.books}
        />
        <ul className="books">
          {Object.keys(this.state.books).map(key => (
            <Book 
              key={key}
              index={key}
              details={this.state.books[key]}
              addToLibrary={this.addToLibrary}
            />
          ))}
        </ul>
      </div>
      <Library
      books={this.state.books}
      library={this.state.library}
      />
    </div>
    </div>
  );
};
}  
  

export default App;
