import React from "react";
import { useSearchParams } from 'react-router-dom';
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getAllNotes } from '../utils/local-data.js';

function HomepageWrapper(){
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword){
    setSearchParams({keyword});
  };

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>
};

class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || ""
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  };

  onKeywordChangeHandler(keyword){
    this.setState(() => {
      return { keyword }
    });
    this.props.keywordChange(keyword);
  };

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <div className="homepage__action">
        <h2>Catatan Aktif</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
        <NoteList notes={notes}/>
      </div>
    );
  };
};


// export default HomePage;
export default HomepageWrapper;