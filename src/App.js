import React, { Component } from 'react';
import './App.css';
import LocalSearch from './LocalSearch';

class App extends Component {
  constructor() {
    super();
    this.elemRefs = {};
    this.state = {
      searchValue: "",
      Hotels: [],
      filteredHotels: [],
      Restaurants: [],
      filteredRestaurants: [],
    };

    // binding function
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.LocalSearch = new LocalSearch();
  }

  updateSearchValue() {
    this.setState({
      searchValue: this.elemRefs.searchRef.value
    });
  }

  // V1 - basic functionality
  // queryForData() {
  //   const searchValue = this.elemRefs.searchRef.value;
  //
  //   if(this.elemRefs.searchRef.value.length === 0) return; // leave data as is and don't try to find new data
  //   this.setState({
  //     Hotels: this.LocalSearch.FindHotel(searchValue),
  //     Restaurants: this.LocalSearch.FindRestaurant(searchValue),
  //   });
  // }

  // V2 - limits querying
  queryForData() {
    const searchValue = this.elemRefs.searchRef.value;

    if(searchValue.length === 0) return; // leave data as is and don't try to find new data
    if(searchValue.length === 1) {
      // get new data
      let newState = {
        Hotels: this.LocalSearch.FindHotel(searchValue),
        Restaurants: this.LocalSearch.FindRestaurant(searchValue),
      };
      newState.filteredHotels = newState.Hotels;
      newState.filteredRestaurants = newState.Restaurants;
      this.setState(newState);
    } else
    // TODO - improve filtering
    if(searchValue.length > 1) {
      // filter results
      this.setState({
        filteredHotels: this.LocalSearch.FindHotel.call(this.state, searchValue),
        filteredRestaurants: this.LocalSearch.FindRestaurant.call(this.state, searchValue),
      });
    }
  }

  handleSearchChange() {
    this.updateSearchValue();
    this.queryForData();
  }

  // TODO - needs to be fixed
  // orderSearchResults(key, order, data) {
  //   switch (order.toLowerCase()) {
  //     case "asc":
  //       return data.sort((a,b) => {
  //         if(a[key]) {
  //           return a[key].toLowerCase() < b[key].toLowerCase()
  //         }
  //       });
  //       break;
  //     case "desc":
  //     default:
  //       return data.sort((a,b) => {
  //         if(a[key]) {
  //           return a[key].toLowerCase() > b[key].toLowerCase()
  //         }
  //       });
  //   }
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel and Restaurant Finder</h1>
        </header>
        <div className="App-intro">
          <label className="SearchBox">
            <input
              ref={r => this.elemRefs.searchRef = r}
              placeholder="Search for a hotel or restaurant"
              value={this.state.searchValue}
              onChange={this.handleSearchChange}
              ></input>
          </label>
          <div className="results">
            <ul>
              {
                (this.state.Hotels.length === 0 &&
                this.state.Restaurants.length === 0) ? (
                  this.state.searchValue ? "No results" : "Try entering a search query"
                ) : (
                  [].concat(
                    ...this.state.filteredHotels,
                    ...this.state.filteredRestaurants
                  ).map((result, ind) => {
                    return (
                      <li key={ind}>
                        <a href="#">
                          {
                            result.Cuisine ? (
                              <div>
                                <h4>Restaurant</h4>
                                <label>Cuisine: {result.Cuisine}</label>
                              </div>
                            ) : (
                              <div>
                                <h4>Hotel</h4>
                              </div>
                            )
                          }
                          <div>
                            <label>Name: {result.Name}</label>
                          </div>
                          <div>
                            <label>Address: {result.Address}</label>
                          </div>
                          <div>
                            <label>City: {result.City}</label>
                          </div>
                          <div>
                            <label>State: {result.State}</label>
                          </div>
                        </a>
                      </li>
                    );
                  })
                )
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
