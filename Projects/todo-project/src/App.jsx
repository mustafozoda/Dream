import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import "./App.css";
import { todo } from "./ToDo.jsx";
function App() {
  const [data, setData] = useState(todo);

  return (
    <BrowserRouter>
      <div className="flex h-[150vh] flex-col">
        <section className="ctr header fixed left-0 right-0 top-0 z-[102]">
          <Header data={data} setData={setData} todo={todo} />
        </section>
        <section className="ctr main h-full bg-white pt-[64px]">
          <Main data={data} setData={setData} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
