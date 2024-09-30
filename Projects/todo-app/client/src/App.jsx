import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import { useState, useEffect } from "react";
import "./App.css";
import { fetchTodos } from "./api/TodoApi.jsx";

function App() {
  const [data, setData] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchTodos();
      setData(fetchedData);
      setTodos(fetchedData);
    };

    loadData();
  }, []);

  return (
    <BrowserRouter>
      <div className="flex h-[200vh] flex-col">
        <section className="ctr header fixed left-0 right-0 top-0 z-[102]">
          <Header data={data} setData={setData} todos={todos} />
        </section>
        <section className="ctr h-full bg-white pt-[40px] laptop:pt-[64px]">
          <Main data={data} setData={setData} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
