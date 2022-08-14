import React from "react";
import AddBookForm from "./AddBookForm";

class Shelf extends React.Component {
    render() {
        return (
            <div className="shelf">
                <h2>Books on the Shelf</h2>
                <AddBookForm addBook={this.props.addBook}/>
            </div>
        )
    }
}

export default Shelf;