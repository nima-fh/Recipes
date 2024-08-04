import { useLocation } from "react-router-dom";
import Usefetch from "../../hooks/usefetch";
import RecipeList from "../../components/RecipeLIst";

function Search() {
  const querystring = useLocation().search;
  const queryparams = new URLSearchParams(querystring);
  const query = queryparams.get("q");
  const url = "http://localhost:3000/recipes?q=" + query;
  const { error, isloading, data } = Usefetch(url);
  return (
    <div>
      <h1>Recipes Including "{query}"</h1>
      {error && <p>{error} </p>}
      {isloading && <p>loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Search;
