import { useParams } from "react-router-dom";
import Usefetch from "../../hooks/usefetch";

function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isloading, error } = Usefetch(url);
  return (
    <div>
      {isloading && <div>Loading...</div>}
      {error && <div>{error} </div>}
      {recipe && (
        <div className="max-w-5xl m-auto mt-6">
          <h1 className="text-4xl font-bold">{recipe.title}</h1>
          <p className="my-4 text-gray-500">
            {" "}
            Takes {recipe.cookingTime} to Cook{" "}
          </p>
          <p className="text-2xl ">ingredients :</p>
          <ul>
            {recipe.ingredients.map((mavad) => (
              <li className="my-2 " key={mavad}>
                {mavad}{" "}
              </li>
            ))}
          </ul>
          <p className="text-2xl  my-3">method :</p>
          <p className="text-xl my-3"> {recipe.method}</p>
        </div>
      )}
    </div>
  );
}

export default Recipe;
