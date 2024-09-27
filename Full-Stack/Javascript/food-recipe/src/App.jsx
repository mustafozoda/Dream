import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./FoodList";

const App = () => {
  const [food, setFood] = useState([]);
  return (
    <div>
      <Search food={food} setFood={setFood} />
      <FoodList food={food} />
    </div>
  );
};

export default App;
