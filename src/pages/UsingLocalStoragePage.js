import React, { useEffect, useState } from "react";
import { View } from "../components/View";
import Modal from "react-modal";

const getDatafromLS = () => {
  const data = localStorage.getItem("notes");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export default function UsingLocalStoragePage() {
  // main array of objects state || notes state || notes array of objects
  const [notes, setnotes] = useState(getDatafromLS());

  // input field states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [sno, setSno] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#F0AA89",
    },
  };
  // form submit event
  const handleAddNoteSubmit = (e) => {
    // setModalIsOpen(!modalIsOpen)
    e.preventDefault();
    // creating an object
    let note = {
      title,
      content,
      sno,
    };
    setnotes([...notes, note]);
    setTitle("");
    setContent("");
    setSno("");
  };

  const editNote = (editingnotes) => {
    setModalIsOpen(!modalIsOpen);
    console.log(editingnotes);
  };

  // delete note from LS
  const deleteNote = (sno) => {
    alert(sno);
    const filterednotes = notes.filter((element, index) => {
      return element.sno !== sno;
    });
    setnotes(filterednotes);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div style={{ height: "100vh", background: "aliceblue" }}>
      <div className="wrapper">
        <h1 style={{ textAlign: "center" }}>Notes App</h1>
        <p style={{ textAlign: "center" }}>
          Add and view your Notes using local storage
        </p>
        <div className="main d-flex justify-content-between m-5">
          <div
            className="form-container"
            style={{
              width: "50%",
              // background: "linear-gradient(45deg, #963d3d, transparent)",
              textAlign: "center",
            }}
          >
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={handleAddNoteSubmit}
            >
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                style={{ width: "300px", margin: "auto" }}
              ></input>
              <br></br>
              <label>Content</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setContent(e.target.value)}
                value={content}
                style={{ width: "300px", margin: "auto" }}
              ></input>
              <br></br>
              <div>
                <button type="submit" className="btn btn-success btn-md">
                  ADD
                </button>
              </div>
            </form>
          </div>

          {/* Modal */}
          <Modal isOpen={modalIsOpen} style={customStyles}>
            <button
              onClick={() => setModalIsOpen(false)}
              className="btn btn-danger"
            >
              X
            </button>
          </Modal>

          <div
            className="view-container "
            style={{
              width: "50%",
              // background: "linear-gradient(45deg, rgb(81 86 94), transparent)",
              textAlign: "center",
              borderRadius: "4px",
            }}
          >
            {notes.length > 0 && (
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>S.NO</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <View
                        notes={notes}
                        deleteNote={deleteNote}
                        editNote={editNote}
                      />
                    </tbody>
                  </table>
                </div>
                <div>
                  <button
                    className="btn btn-danger "
                    onClick={() => setnotes([])}
                  >
                    Remove All
                  </button>
                </div>
              </>
            )}
            {notes.length < 1 && <div>No Notes are added yet</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
