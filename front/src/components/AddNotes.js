import React ,{useContext, useState} from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import noteContext from '../Context/notes/noteContext';
import Button from './Button';

const AddNotes = ({alert}) => {

  const context = useContext(noteContext);
  const {addNote} = context;
  const [note,setNote] = useState({title:'',description: "", tag:""});

  const submetNote = e =>{
    e.preventDefault()
    addNote(note)
    alert("Note Added Successfully","success")
    setNote({title:'',description: "", tag:""});
  }

  const onChange = e => {
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <Container>
        <h2 className='my-3'>Add Note</h2>
       <Card   style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"transparent",opacity:1}}>
       <Card.Body>
       <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={note.title} onChange={onChange} placeholder="Enter the title here" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" value={note.description} onChange={onChange} placeholder="Enter the description here" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Tag</Form.Label>
        <Form.Control type="text" name="tag"  value={note.tag} onChange={onChange} placeholder="Enter the tag here" />
      </Form.Group>
      <Button disabled={note.title.length > 3 && note.description.length > 5} onClick={submetNote} text="Add Note"/>
    </Form>
    </Card.Body>
      </Card>
    </Container>
  )
}

export default AddNotes;
