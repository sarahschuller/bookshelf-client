import React from "react";

class AddBookForm extends React.Component {
    titleRef = React.createRef();
    authorRef = React.createRef();
    descRef = React.createRef();
    isReadRef = React.createRef();

    createBook = (e) => {
        // Stop the form from submitting
        e.preventDefault(); 
        // Fish object
        const book = {
            title: this.titleRef.current.value,
            author: this.authorRef.current.value,
            desc: this.descRef.current.value,
        };
        this.props.addBook(book);
        // Refresh the form
        e.currentTarget.reset();
    };
    
    render() {
        return (
            <div className="add-book-form">
            <form className="book-edit" onSubmit={this.createBook}>
                <h2>Add A New Book</h2>
                <input name="title" ref={this.titleRef} type="text" placeholder="Title" />
                <input name="author" ref={this.authorRef} type="text" placeholder="Author" />
                <input name="desc" ref={this.descRef} type="text" placeholder="Description" />
                <select name="isRead" ref={this.isReadRef} >
                    <option value="isRead">I've read this!</option>
                    <option value="isNotRead">I haven't read this yet!</option>
                </select>
                <button type="submit">+ Add Book</button>
            </form>
            <h2>Available Books</h2>
            </div>
        )
    }
}

export default AddBookForm;