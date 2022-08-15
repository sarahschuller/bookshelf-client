import React from "react";

class Book extends React.Component {
    render() {
        const { title, author, desc, status } = this.props.details;
        const isAvailable = status === "available";
        return (
            <div className="book">
                <li className="book-list">
                    <h3 className="book-title">{title}</h3>
                    <span className="author-name">{author}</span>
                    <p>{desc}</p>
                    <button 
                    disabled={!isAvailable}
                    className="book-button"
                    onClick={() => this.props.addToLibrary(this.props.index)}
                    >{isAvailable ? "Add to Library" : "Book Unavailable"}</button>
                </li>
            </div>
        )
    }
}

export default Book;