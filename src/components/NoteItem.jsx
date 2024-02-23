import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  if (!note || !note.title || !note.date) {
    return null;
  }

  return (
    <Link className="note" to={`/edit-note/${note.id}`}>
      <h4>
        {note.title.length > 30 ? note.title.substr(0, 30) + "..." : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};
export default NoteItem;
