import "./App.css";
import "./key";
import { useState } from "react";
import Recipe from "./Recipe";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  let url = `https://api.edamam.com/search?q=${query}&app_id=c96974c7&app_key=40aaa7f7cb5af33d1b8d86ca84b14734&from=0&to=20&calories=591-722&health=vegetarian`;

  const getRecipes = async () => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  const submit = (event) => {
    event.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <h1 onClick={getRecipes}>Food Recipe App</h1>
      <form className="app-search" onSubmit={submit}>
        <input
          className="app-input"
          type="text"
          placeholder="Enter Ingredient"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <input className="app-submit" type="submit" value="Search" />
      </form>
      <div className="app-recipe">
        {recipes.map((recipe, key) => (
          <Recipe recipe={recipe} key={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
