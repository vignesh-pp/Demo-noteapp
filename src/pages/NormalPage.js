import React from 'react'
import { useState } from "react";
import CreateNote from '../components/CreateNote';
import Notes from '../components/Notes';
export default function NormalPage() {
    const [notes, setNotes] = useState([]);
    const addNote = (newNote) => {
      setNotes([...notes, newNote]);
    };
    const deleteNote = (id) => {
      setNotes(notes.filter((note, index) => index !== id));
    };
    return (
      <div className="App">
        <CreateNote onAdd={addNote} />
        {notes.map((note, index) => (
          <Notes
            onDelete={deleteNote}
            id={index}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>
    );
}
