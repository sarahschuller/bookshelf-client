import React from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Library extends React.Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

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
          <>
          <Modal show={this.state.isOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>{book.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{book.desc}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
            </Modal.Footer>
            </Modal>
          <li key={key}>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <button onClick={this.openModal}>Expand Details</button>
            <button onClick={() => this.props.removeFromLibrary(key)}>
                  &times; Remove
            </button>
            </li>
            
            </>
            
        );
      };
      render() {
        const libraryIds = Object.keys(this.props.library);
        
        return (
          <>
            
          <div className="library-wrap">
            <div className="library-header">
            <h2>My Library</h2>
            </div>
            <ul className="library">{libraryIds.map(this.renderLibrary)}</ul>
          </div>
          </>
        );
      }
    }
    
export default Library;