import { useState } from "react";
import NoteContext from "./noteContext";
import axios from 'axios';


const NoteState = (props) => {
  const host = "http://localhost:8000"
  const notesInitial = [];

  const getAllNotes = async () => {
    try {
      const response = await axios(`${host}/api/notes/fetchallnotes`, {
        headers: {
          "auth-token": localStorage.getItem("token")
        },
      });
      setNotes(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const addNote = async note => {
    try {
      const { title, description, tag } = note
      if (title.length >= 3 && description.length >= 5) {
        const response = await axios.post(`${host}/api/notes/addnote`, { title, description, tag: tag ? tag : "General" }, {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
          }
        });
        setNotes(notes.concat(response.data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteNote = async id => {
    try {
      const response = await axios.delete(`${host}/api/notes/deletenote/${id}`, {
        headers: {
          "auth-token": localStorage.getItem("token")
        },
      });
      const Notes = notes.filter(note => note._id !== id)
      setNotes(Notes)
    } catch (error) {
      console.log(error)
    }
  }
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await axios.put(`${host}/api/notes/updatenote/${id}`, { title, description, tag }, {
        headers: {
          "auth-token": localStorage.getItem("token")
        },
      });
      let newNotes = JSON.parse(JSON.stringify(notes))
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes)
    } catch (error) {
      console.log(error)
    }
  }

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;