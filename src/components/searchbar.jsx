import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>
          <span className="text-white">search :</span>
          <input
            type="text"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            className="rounded-2xl p-2 mx-2"
          />
        </label>
      </form>
    </div>
  );
}

export default Searchbar;
