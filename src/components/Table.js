import React from "react";
import API from "../utils/Api";
import "../style/table.css"

// import DateFormat from 'dataformat';

class Table extends React.Component {

  state = {
    result: {},
    search: ""
  };

//Api call for randomuser
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

  // sorted by first name
  sortByName = () => {
     const sortedEmployees = this.state.results.sort((a,b) => {
        if (b.name.first > a.name.first) {
          return -1
        }
        if (a.name.first > b.name.first) {
          return 1
        }
          return 0;

     });

     if (this.state.sortOrder === "DESC" ) {
        sortedEmployees.reverse();
        this.setState({ sortOrder: "ASC "});
     } else {
         this>this.setState({ sortOrder: "DESC" });
     }
       this.setState({ results: sortedEmployees })

  }

  // sorted by last name
  sortByName = () => {
    const sortedEmployees = this.state.results.sort((a,b) => {
       if (b.name.last > a.name.last ) {
         return -1
       }
       if (a.name.last > b.name.last ) {
         return 1
       }
         return 0;

    });

    if (this.state.sortOrder === "DESC" ) {
       sortedEmployees.reverse();
       this.setState({ sortOrder: "ASC "});
    } else {
        this>this.setState({ sortOrder: "DESC" });
    }
      this.setState({ results: sortedEmployees })

 }


// render items

  render() {

    <div>

      <Search handleInputchange={this.handleInputchange}
        search={this.state.search} />

      <div classNmae="table-responsive">   
        <table className="table table-striped table-responsive  text-center table-hover"> 
      
          <thead>
            <tr>
              <th>Image</th>
              <th>First className <span className="downArrow" onClick={this.sortByName}></span></th>
              <th>Lastr Name <span className="downArrow" onClick={this.sortByName}></span></th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
      
      
      
      
     




























        </table>
    
      </div>
    </div>

  }

  
}

export default Table;