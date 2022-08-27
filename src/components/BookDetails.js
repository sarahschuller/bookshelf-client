import React from 'react'
import { Modal, Button } from 'react-bootstrap'
function BookDetails() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!false)
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
    </>
  )
}
export default BookDetails;