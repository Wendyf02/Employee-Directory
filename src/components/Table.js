import React from "react";
import API from "../utils/Api";
import "../style/table.css"

import DateFormat from 'dataformat';

class Table extends React.component {

  state = {
    result: {},
    search: ""
  };


  componentDidMount() {
    API.ApiSearch()
    .then(res => {
     this.setState({ results: res.data.results })
      console.log(this.state.results)
    }).catch(err => console.log(err))
  }


  handleInputchange = event => {
     
    if (event.target.name === "search") {
      const searchTerm = event.target.value.toLowerCase();
      this.setState({
         search: searchTerm

      })

    }
  }







  
}