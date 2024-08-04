import { useEffect, useState } from "react";
import Usefetch from "../../hooks/usefetch";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newingredients, setNewingredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const url = "http://localhost:3000/recipes";
  const { postData, data, error } = Usefetch(url, "POST");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + "minutes",
    });
  };
  const handelAdd = (e) => {
    e.preventDefault();
    if (newingredients && !ingredients.includes(newingredients)) {
      setIngredients((prev) => [...prev, ",", newingredients]);
      setNewingredients("");
    }
  };
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);
  return (
    <div className="max-w-4xl m-auto text-center ">
      <h1 className="text-4xl my-8">Add a New Recipe</h1>
      <form onSubmit={handelSubmit}>
        <div className="my-11">
          <label>
            <span className="text-xl mx-2"> Recipe Title :</span>
            <div className="my-3">
              <input
                type="text"
                className="border-2 rounded-2xl p-2"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            <span className="text-xl mx-2">Recipe ingredients :</span>{" "}
            <div>
              <div className="my-3">
                <input
                  type="text"
                  className="border-2 rounded-2xl p-2"
                  onChange={(e) => {
                    setNewingredients(e.target.value);
                  }}
                  value={newingredients}
                />
              </div>
              <div>
                <button
                  className="border mx-3 rounded-full bg-slate-900 text-white p-4 px-7 hover:bg-slate-500"
                  onClick={handelAdd}
                >
                  Add
                </button>
              </div>
              <div className="my-3">
                <p>
                  {" "}
                  Current ingredients :{" "}
                  {ingredients.map((e) => (
                    <em key={e}>{e} </em>
                  ))}{" "}
                </p>
              </div>
            </div>
          </label>
        </div>

        <div className="my-11">
          <label>
            <span className="text-xl mx-2"> Recipe Method :</span>
            <div>
              <textarea
                type="text"
                className="border-2 rounded-2xl p-10 my-3"
                onChange={(e) => {
                  setMethod(e.target.value);
                }}
                value={method}
                required
              />
            </div>
          </label>
        </div>
        <div className="my-11">
          <label>
            <span className="text-xl mx-2"> cooking Time(minute) :</span>
            <div>
              <input
                type="number"
                className="border-2 rounded-2xl p-2 my-3"
                onChange={(e) => {
                  setCookingTime(e.target.value);
                }}
                value={cookingTime}
                required
              />
            </div>
          </label>
        </div>
        <div className="my-11">
          <button className="border rounded-full bg-slate-900 text-white p-4 px-5 hover:bg-slate-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
