import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example({handleClose ,show,middleware ,currentNote}) {
    const [note,setNote] = useState({etitle:'',edescription: "", etag:""});
    useEffect(()=>{
        setNote({id:currentNote._id, etitle: currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
        //eslint-next-line-disable
    },[])

    const submetNote = e =>{
      middleware(note)
    }
    const onChange = e => {
      setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="etitle" value={note.etitle} onChange={onChange} placeholder="Enter the title here" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="edescription" value={note.edescription} onChange={onChange} placeholder="Enter the description here" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Tag</Form.Label>
        <Form.Control type="text" name="etag" onChange={onChange} value={note.etag} placeholder="Enter the tag here" />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='button'  disabled={note.etitle.lenght < 5 || note.edescription.length < 5} onClick={()=>{handleClose()
            submetNote()}}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;