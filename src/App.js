import { useState } from "react";
import { ProductList } from "./components/Products/ProductList.jsx";
import { Categories } from "./components/Categories/Categories.jsx";

function App() {
  const [category, setCategory] = useState("furniture");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <Categories category={category} onCategoryChange={handleCategoryChange} />
      <ProductList category={category} />
    </div>
  );
}

export default App;
