import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import "./App.css";
// import { todo } from "./ToDo.jsx";

const URL = "http://localhost:8080/api/todos";
function App() {
  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("http://localhost:8080/api/todos");

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }

    fetchTodos();
  }, []);
  const [data, setData] = useState([]);

  return (
    <BrowserRouter>
      <div className="flex h-[200vh] flex-col">
        <section className="ctr header fixed left-0 right-0 top-0 z-[102]">
          <Header data={data} setData={setData} todo={data} />
        </section>
        <section className="ctr h-full bg-white pt-[40px] laptop:pt-[64px]">
          <Main data={data} setData={setData} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
