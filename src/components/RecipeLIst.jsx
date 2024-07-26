import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";
function RecipeList(props) {
  return (
    <div className="grid grid-cols-3 gap-14 mt-9">
      {props.recipes.map((recipe) => (
        <div key={recipe.id}>
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipe.title}
            </h5>
            <p className="text-gray-300"> {recipe.cookingTime} to Make</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {recipe.method.substring(0, 100)}
              ...
            </p>
            <Button>
              <Link to={`/Recipes/${recipe.id}`}> Read more...</Link>
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
//    data.map((recipe) => (
//      <div key={recipe.id}>
//        <h2>{recipe.title} </h2>
//      </div>
//    ));
