import React from "react";

/**
 * @typedef {{ title: string; content: string; id: number; onDelete: (id: number) => void }} NoteProps
 */

/**
 * @param {NoteProps} props
 */
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
