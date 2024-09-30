import { useState } from "react";
import { ProductList } from "./components/Products/ProductList";
import { Categories } from "./components/categories/categories";

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
