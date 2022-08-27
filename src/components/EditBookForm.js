import React from "react";
import PropTypes from "prop-types";

class EditBookForm extends React.Component {
  static propTypes = {
    book: PropTypes.shape({
      title: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      author: PropTypes.string,
    }),
    index: PropTypes.string,
    updatebook: PropTypes.func
  };
  handleChange = e => {
    // console.log(e.currentTarget.value);
    // update that book
    // 1. Take a copy of the current book
    const updatedbook = {
      ...this.props.book,
      [e.currentTarget.title]:
        e.currentTarget.title === 'title'
    };
    this.props.updatebook(this.props.index, updatedbook);
  };
  render() {
    return (
      <div classtitle="book-edit">
        <input
          type="text"
          title="title"
          onChange={this.handleChange}
          value={this.props.book.title}
        />
        <input
          type="text"
          title="author"
          onChange={this.handleChange}
          value={this.props.book.author}
        />
        <select
          type="text"
          title="status"
          onChange={this.handleChange}
          value={this.props.book.status}
        >
          <option value="available">I've read this!</option>
          <option value="unavailable">I haven't read this!</option>
        </select>
        <textarea
          title="desc"
          onChange={this.handleChange}
          value={this.props.book.desc}
        />
        <button onClick={() => this.props.deletebook(this.props.index)}>
          Remove book
        </button>
      </div>
    );
  }
}

export default EditBookForm;