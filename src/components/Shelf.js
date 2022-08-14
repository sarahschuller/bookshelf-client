import React from "react";
import AddBookForm from "./AddBookForm";
// import EditBookForm from "./EditBookForm";

class Shelf extends React.Component {
    render() {
        return (
            <div className="shelf">
                <h2>The Shelf</h2>
                {/* {Object.keys(this.props.books).map(key => (
                <EditBookForm
                    key={key}
                    index={key}
                    book={this.props.books[key]}
                    updateBook={this.props.updateBook}
                    deleteBook={this.props.deleteBook}
                />
                ))} */}
                <AddBookForm addBook={this.props.addBook}/>
                <button onClick={this.props.loadSampleBooks}>
                Load Sample Books
                </button>
            </div>
        )
    }
}

export default Shelf;