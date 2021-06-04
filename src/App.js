import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import NotFound from './components/NotFound';
import { Switch, Route  } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=9810fdab8a6872c19c905c5c33b3e351&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/aayushd18.github.io" exact>
          <Home />
        </Route>
        <Route path="aayushd18.github.io/about" component={AboutView} />
        <Route path="aayushd18.github.io/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="aayushd18.github.io/movies/:id" component={MovieView} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
