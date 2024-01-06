import React from "react";
import PropTypes from 'prop-types'

class NoteInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    // this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onBodyInputEventHandler = this.onBodyInputEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  };

  onTitleChangeEventHandler(event){
    this.setState(() => {
      return { title: event.target.value }
    });
  };
  // onBodyChangeEventHandler(event){
  //   this.setState(() => {
  //     return { body: event.target.value }
  //   });
  // };
  onBodyInputEventHandler(event){
    this.setState(() => {
      return { body: event.target.innerHTML }
    });
  };
  onSubmitEventHandler(event){
    event.prevenDefault();
    this.props.addNote(this.state);
  };

  render(){
    return (
      <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
        <input 
          name="titleInput" 
          id="titleInput" 
          type="text" 
          placeholder="Judul..." 
          className="add-new-page__input__title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}/>
        <div
          className="add-new-page__input__body"
          data-placeholder="Deskripsi catatan"
          contentEditable
          value={this.state.body}
          onInput={this.onBodyInputEventHandler}
        />

        <button className="btn-add">Done</button>
      </form>
    )
  }
};

NoteInput.propType = {
  addNote: PropTypes.func.isRequired
}

export default NoteInput