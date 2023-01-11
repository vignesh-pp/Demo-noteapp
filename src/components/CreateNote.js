import React, { useState } from "react";

export default function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
    console.log(note);
  };
  const submitNote = (e) => {
    e.preventDefault();
    if (
      document.getElementById("title").value !== "" &&
      document.getElementById("content").value !== ""
    ) {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };
  return (
    <div>
      <h2 style={{marginTop:'30px'}}>Note App</h2>
      <form onSubmit={submitNote}>
        <div class="form-group" style={{ margin: "20px" }}>
          <input
            class="form-control"
            name="title"
            id="title"
            type="text"
            value={note.title}
            onChange={handleChange}
            placeholder="Enter title..."
            style={{ margin: "auto", padding: "10px", width: "300px" }}
            required
            autoFocus
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            name="content"
            id="content"
            type="text"
            value={note.content}
            onChange={handleChange}
            placeholder="Enter content"
            style={{ margin: "auto", padding: "10px", width: "300px" }}
            required
          />
        </div>

        <button type="submit" class="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
