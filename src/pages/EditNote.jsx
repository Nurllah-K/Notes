import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...note, title, details, date };
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          return newNote;
        }
        return item;
      });
      setNotes(newNotes);
      navigate("/");
    } else {
      return;
    }
  };

  const handleDelete = () => {
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      const newNotes = notes.filter((item) => item.id !== id);
      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note-header">
        <Link to={"/"} className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Kaydet
        </button>
        <button className="btn delete" onClick={handleDelete}>
          <MdDelete />
        </button>
      </header>
      <form className="create-note-form" onSubmit={handleForm}>
        <input
          autoFocus
          type="text"
          placeholder="başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="30"
          placeholder="not Alanı...."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
