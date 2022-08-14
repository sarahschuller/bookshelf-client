import React from "react";

class AddBookForm extends React.Component {
    titleRef = React.createRef();
    authorRef = React.createRef();
    pagesRef = React.createRef();
    isReadRef = React.createRef();
    imageRef = React.createRef();

    createBook = (e) => {
        // Stop the form from submitting
        e.preventDefault(); 
        // Fish object
        const book = {
            title: this.titleRef.current.value,
            author: this.authorRef.current.value,
            pages: this.pagesRef.current.value,
        };
        this.props.addBook(book);
        // Refresh the form
        e.currentTarget.reset();
    };
    
    render() {
        return (
            <form className="book-edit" onSubmit={this.createBook}>
                <input name="title" ref={this.titleRef} type="text" placeholder="Title" />
                <input name="author" ref={this.authorRef} type="text" placeholder="Author" />
                <input name="pages" ref={this.pagesRef} type="number" placeholder="Pages" />
                <select name="isRead" ref={this.isReadRef} >
                    <option value="isRead">I've read this!</option>
                    <option value="isNotRead">I haven't read this yet!</option>
                </select>
                <button type="submit">+ Add Book</button>
            </form>
        )
    }
}

export default AddBookForm;