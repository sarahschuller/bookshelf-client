import React from "react";
import PropTypes from "prop-types";

class Book extends React.Component {
    render() {
        const { title, author, desc } = this.props.details;
        return (
            <div className="book-grid">
                <li className="book-list">
                    <h3 className="book-title">{title}</h3>
                    <span>{author}</span>
                    <p>{desc}</p>
                    <button className="book-button">Add to Library</button>
                </li>
            </div>
        )
    }
}

export default Book;