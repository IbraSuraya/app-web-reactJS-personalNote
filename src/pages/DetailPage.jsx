import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id}/>
};

class DetailPage extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      note: getNote(props.id)
    };
  };

  render() {
    if (this.state.note == null) {
      return (
        <>
        <h1>Not Found</h1>
        <p>Your note with <i>id-{this.props.id.split('-')[1]}</i> was not found</p>
        </>
      )
    };

    return (
      <section className="detail-page__action">
        <NoteDetail {...this.state.note}/>
      </section>
    );
  };
};

// export default DetailPage;
export default DetailPageWrapper;