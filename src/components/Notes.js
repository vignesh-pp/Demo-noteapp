import React from "react";

export default function Notes(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div style={{display:'flex'}} className='d-flex'>
      <div
        className="note"
        style={{
          width: "300px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: "30px",
          borderRadius: "5px",
        }}
      >
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="btn btn-danger m-1" onClick={handleClick}>
          delete
        </button>
        <button className="btn btn-warning m-1" onClick={handleClick}>
          Edit
        </button>
      </div>
    </div>
  );
}
