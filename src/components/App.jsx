import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus quam sed urna dapibus, at dignissim ante commodo. Nulla facilisi. Sed tellus nibh, accumsan eget neque vitae, pharetra ultrices erat.",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus quam sed urna dapibus, at dignissim ante commodo. Nulla facilisi. Sed tellus nibh, accumsan eget neque vitae, pharetra ultrices erat.",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus quam sed urna dapibus, at dignissim ante commodo. Nulla facilisi. Sed tellus nibh, accumsan eget neque vitae, pharetra ultrices erat.",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus quam sed urna dapibus, at dignissim ante commodo. Nulla facilisi. Sed tellus nibh, accumsan eget neque vitae, pharetra ultrices erat.",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus quam sed urna dapibus, at dignissim ante commodo. Nulla facilisi. Sed tellus nibh, accumsan eget neque vitae, pharetra ultrices erat.",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus quam sed urna dapibus, at dignissim ante commodo. Nulla facilisi. Sed tellus nibh, accumsan eget neque vitae, pharetra ultrices erat.",
    },
  ]);

  function addNote(newNote) {
    setNotes((previousNotes) => {
      return [...previousNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((previousNotes) => {
      return previousNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-container">
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
