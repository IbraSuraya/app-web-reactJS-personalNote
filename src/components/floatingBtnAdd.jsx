import React from "react";
import { Link } from 'react-router-dom'

function FloatingBtnAdd () {
  return (
    <div className="floating-btnAdd-container">
      <Link to='/add' className="floating-btnAdd">
        +
      </Link>
    </div>
  )
};

export default FloatingBtnAdd;