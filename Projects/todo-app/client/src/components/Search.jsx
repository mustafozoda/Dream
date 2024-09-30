import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

// const URL = "http://localhost:8080/api/todos";
const URL = "https://todo-app-olfy.onrender.com/api/todos";

export default function Search({ setData }) {
  const [query, setQuery] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();
        setTodos(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }

    fetchTodos();
  }, []);

  useEffect(() => {
    const filteredTodos = todos.filter((el) =>
      el.title.toLowerCase().includes(query.toLowerCase()),
    );
    setData(filteredTodos);
  }, [query, todos, setData]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="search-form flex">
        <input
          placeholder="Search your task here..."
          className="search-form-inp h-[30px] w-[100%] rounded-[5px] rounded-r-none pl-[10px] placeholder:text-[12px] placeholder:text-[#a1a3ab]"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="search-form-btn -[none] h-[30px] w-[40px] rounded-[5px] rounded-l-none bg-red-700 text-white"
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
