import React from "react";
import Shelf from "./Shelf";
import Book from "./Book";
import Library from "./Library";
import Header from "./Header";
import sampleBooks from "../sample-books.js"

class App extends React.Component {
  state = {
    books: {},
    library: {}
  };

  // static propTypes = {
  //   match: PropTypes.object,
  // }

  // componentDidMount() {
  //   const { params } = this.props.match;
  //   // reinstate local store
  //   const localStorageRef = localStorage.getItem(params.storeId);
  //   if(localStorageRef) {
  //     this.setState({ library: JSON.parse(localStorageRef) })
  //   }
  //   this.ref = base.syncState(`${params.storeId}/books`, {
  //     context: this,
  //     state: 'books',
  //   });
  // };

  // componentDidUpdate() {
  //   localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.library));
  // }

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

  addBook = book => {
    // 1. Take a copy of the existing state
    const books = { ...this.state.books };
    // 2. Add our new book to that books variable
    books[`book${Date.now()}`] = book;
    // 3. Set the new books object to state
    this.setState({ books });
  };

  updateBook = (key, updatedbook) => {
    // 1. Take a copy of the current state
    const books = { ...this.state.books };
    // 2. Update that state
    books[key] = updatedbook;
    // 3. Set that to state
    this.setState({ books });
  };

  deleteBook = (key) => {
    // 1. Take a copy of state
    const books = {...this.state.books };
    // 2. Update the state
    books[key] = null;
    // 3. Set the new state
    this.setState({ books });
  };

  loadSampleBooks = () => {
    this.setState({ books: sampleBooks })
  }

  addToLibrary = key => {
    // 1. take a copy of state
    const library = { ...this.state.library };
    // 2. Either add to the library, or update the number in our library
    library[key] = library[key] + 1;
    // 3. Call setState to update our state object
    this.setState({ library });
  };

  removeFromLibrary = key => {
    // 1. take a copy of state
    const library = { ...this.state.library };
    // 2. remove that item from library - can use delete as this is not mirrored to firebase
    delete library[key];
    // 3. Call setState to update our state object
    this.setState({ library });
  };

  expandBookDetails(e) {
    // open modal/pop up with additional book details
    const button = e.currentTarget;
    console.log('You just clicked it')
  }

  render() {
    return (
      <div className="Main">
      <Header />
      <div className="App">
        <Shelf
          addBook={this.addBook}
          updateBook={this.updateBook}
          loadSampleBooks={this.loadSampleBooks}
          books={this.state.books}
          addToLibrary={this.addToLibrary}
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
          <Library
            books={this.state.books}
            library={this.state.library}
            removeFromLibrary={this.removeFromLibrary}
            expandBookDetails={this.expandBookDetails}
            />
          
        </div>
        
      </div>

    );
  };
  }  

export default App;