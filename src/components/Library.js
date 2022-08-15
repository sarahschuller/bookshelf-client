import React from "react";

class Library extends React.Component {
    renderLibrary = key => {
        const book = this.props.books[key];
        const isAvailable = book.status === "available";
        if (!isAvailable) {
          return (
            <li key={key}>
              Sorry {book ? book.title : "book"} is no longer available
            </li>
          );
        }
        return (
          <li key={key}>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <button onClick={() => this.props.expandBookDetails(key)}>Expand Details</button>
            <button onClick={() => this.props.removeFromLibrary(key)}>
                  &times; Remove
            </button>
          </li>
        );
      };
      render() {
        const libraryIds = Object.keys(this.props.library);
        
        return (
          <div className="library-wrap">
            <div className="library-header">
            <h2>My Library</h2>
            </div>
            <ul className="library">{libraryIds.map(this.renderLibrary)}</ul>
          </div>
        );
      }
    }
    
export default Library;