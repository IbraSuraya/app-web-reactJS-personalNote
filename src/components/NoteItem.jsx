import React from "react";
import Protypes from 'prop-types'
import { Link } from 'react-router-dom';
import {showFormattedDate} from '../utils/index.js'

function NoteItem({id, title, createdAt, body, archived}) {
  return (
    <div className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <h3 className="note-item__createdAt">{showFormattedDate(createdAt)}</h3>
      <h3 className="note-item__body">{body}</h3>
    </div>
  );
};

NoteItem.prototype = {
  title: Protypes.string.isRequired,
  createdAt: Protypes.string.isRequired,
  body: Protypes.string.isRequired,
  archived: Protypes.bool.isRequired,
}

export default NoteItem;