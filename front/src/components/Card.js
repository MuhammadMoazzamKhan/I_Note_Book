import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import Example from './Modal'
const Cards = ({ alert,note, deleteNote, editNote }) => {


  const [show, setShow] = useState(false);

  const middleware = e => {
    editNote(e.id, e.etitle, e.edescription, e.etag)
    if(e.id, e.etitle, e.edescription, e.etag){
      alert("Note Updated Successfully", "success")
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Example currentNote={note} middleware={middleware} handleClose={handleClose} show={show} />
      <Card className="bg-dark mx-3 mb-3 text-white  p-3" style={{ maxWidth: "40.5vw" }} >
        <div className='d-flex align-items-center'>
          <Card.Title>{note.title}</Card.Title>
          <MdDelete size={21} className='mb-2 ms-3 cursor-pointer' onClick={() => {
            deleteNote(note._id);
            if(note._id){
              alert("Note Deleted Successfully", "success")
            }else{
              alert("Note did'n Delete Successfully", "danger")
            }
          }} />
          <AiOutlineEdit size={21} className='mb-2 ms-2 cursor-pointer' onClick={handleShow} />
        </div>
        <Card.Text>
          {note.description}
        </Card.Text>
        <Card.Text>{moment(note.date).fromNow()}</Card.Text>


      </Card>
    </div>
  )
}

export default Cards
