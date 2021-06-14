import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
function App() {
  const [listCharacters, setListCharacters] = useState([]);
  // the data coming back is an array and i want to list and display them
  const [nextUrl, setNextUrl] = useState("");
  // the URL is to load the next movie, as the URL is the only way of giving the movie a reference
  // make a request as soon as you land on the page use Effect takes two argument and dependency list
  // using the star wars api always fetch a response that is Json, I want the list of characters (data.results).and the next URL (data.next)
  useEffect(function () {
    fetch("https://swapi.dev/api/people")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setListCharacters(data.results);
        setNextUrl(data.next);
      });
  }, []);

  // Load more will change the state of the app, load more on the bottom of the page
  function loadMore() {
    // fetch the next url
    fetch(nextUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // update the state
        setListCharacters([...listCharacters, ...data.results]);
        // set the next of the page and object desturing to get the properties
        setNextUrl(data.next);
      });
  }
  return (
    <div className="App">
      <h1> Star Wars Catalog</h1>
      <div className="card-container">
        {listCharacters.map(function (character) {
          return <Card character={character}></Card>;
        })}
      </div>
      <button onClick={loadMore} data-cy="load-more">
        Load More
      </button>
    </div>
    // this button is related to the Load more function which allows the user to load more of the star wars characters
  );
}

export default App;
