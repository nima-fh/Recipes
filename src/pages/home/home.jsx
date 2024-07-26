import RecipeList from "../../components/RecipeLIst";
import Usefetch from "../../hooks/usefetch";
function Home() {
  const url = "http://localhost:3000/recipes";
  const { data, isloading, error } = Usefetch(url);
  return (
    <div className="max-w-6xl m-auto">
      {isloading && <div> Loading...</div>}
      {error && <div>{error} </div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
