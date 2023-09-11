import React, { useContext,useState } from 'react'
import AddNotes from './AddNotes'
import Card from './Card'
import { ConfigProvider } from 'antd'
import noteContext from "../Context/notes/noteContext"
import Container from 'react-bootstrap/esm/Container';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = ({alert}) => {
    const Navigate = useNavigate()
    const context = useContext(noteContext);
    
    const { notes, deleteNote, getAllNotes,editNote } = context;
    useEffect(()=>{
        if(localStorage.getItem("token")){
            getAllNotes();
        }else{
            Navigate("/login")
        }
    },[])

    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#e3a572"
                    }
                }}>
                    
                <AddNotes alert={alert} />
                <Container> <h1 className='mt-3'>Own Notes</h1></Container>
                <Container className='my-3 d-flex flex-wrap '>
                    {notes.map(note  => {
                        return  <Card key={note._id} note={note} alert={alert} editNote={editNote} deleteNote={deleteNote}  /> })}
                </Container>
            </ConfigProvider>
        </div>
    )
}

export default Home
