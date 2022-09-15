import React from "react";
import notes from "../notes";
import "../style.css";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      {notes.map((newNote) => (
        <Note
          key={newNote.key}
          noteTitle={newNote.title}
          noteContent={newNote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
