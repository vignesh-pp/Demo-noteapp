import React, { useState } from "react";

export default function SelfPage() {
  const [note, setNote] = useState({ heading: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
    console.log(note);
  };
  const addNote=()=>{
    let notes={
        heading:"",content:""
    }
        setNote([...note,notes]);
  }

  const submitCheck = (e) => {
    e.preventDefault();
    alert(JSON.stringify(note));
    addNote();
  };

  return (
    <>
      <div className="main d-flex justify-space-between">
        <div className="create_Note">
          <form onSubmit={submitCheck}>
            <input
              type="text"
              name="heading"
              placeholder="Heading"
              value={note.heading}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="content"
              placeholder="Content"
              value={note.content}
              onChange={handleChange}
            />
            <br />
            <input type="submit" className="btn btn-primary" value="Add" />
          </form>
        </div>
        <div className="Show_Note">

            
        </div>
      </div>
    </>
  );
}
