import React from "react";
import "../style/searchBars.css"

function searchbars(props) {
  return (
    <form>
      <div className="form-group search-widget">
        <div className="input-group mb-3">

        <input
          onChange={props.handleInputChange}
          value={props.searcg}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search directory for Employee"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
        
        </div>
      </div>
    </form>
  );
}

export default SearchForm;