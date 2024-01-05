import React from "react";
import { showFormattedDate } from '../utils/index.js'
import PropTypes from 'prop-types';

function NoteDetail({ title, createdAt, body }) {
  return (
    <div className="detail-page">
      <h4 className="detail-page__title">{title}</h4>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
    </div>
  )
}

NoteDetail.prototype = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default NoteDetail;