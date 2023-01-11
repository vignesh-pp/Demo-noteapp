import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

export const View = ({ notes, deleteNote, editNote }) => {
  return notes.map((note, index) => (
    <>
      <tr key={note.sno}>
        <td>{(note.sno = index + 1)}</td>
        <td>{note.title}</td>
        <td>{note.content}</td>
        <td className="action-btn">
          <BsFillTrashFill onClick={() => deleteNote(note.sno)} />
          {""}
          <FiEdit2 onClick={() => editNote(note)} />
        </td>
      </tr>
    </>
  ));
};
