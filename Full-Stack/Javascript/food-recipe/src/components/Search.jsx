import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "2953198591754a569f80b638af480e05";

export default function Search({ food, setFood }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFood(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}
