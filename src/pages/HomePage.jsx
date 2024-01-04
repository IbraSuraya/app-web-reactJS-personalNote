import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getAllNotes } from '../utils/local-data.js';

class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: getAllNotes()
    }
  };

  render() {
    return (
      <div className="homepage__action">
        <h2>Catatan Aktif</h2>
        <SearchBar />
        <NoteList notes={this.state.notes}/>
      </div>
    );
  };
};


export default HomePage;