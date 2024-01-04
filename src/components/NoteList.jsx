import React from "react";
import PropTypes from 'prop-types';
import NoteItem from "./NoteItem";

function NoteList({notes}) {
  if (!notes.length){
    return <p className="noFound">No found!</p>;
  };

  return (
    <div className="notes-list">{
      notes.map((note) => (
        <NoteItem 
          key={note.id}
          id={note.id}
          {...note}/>
      ))}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NoteList;