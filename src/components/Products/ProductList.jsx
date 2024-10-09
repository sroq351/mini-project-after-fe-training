import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { ErrorInfo } from "../ErrorInfo/ErrorInfo";
import styles from "./ProductList.module.css";
import { EmptyList } from "../EmptyList/EmptyList";

export const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(false);
    setIsFetching(true);
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch(() => {
        setShowError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [category]);

  if (isFetching) return <CircularProgress />;

  if (showError) return <ErrorInfo />;

  if (products.length === 0) {
    return <EmptyList />;
  }

  return (
    <div className={styles.productContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.productItem}>
          <div>
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Price: </strong>${product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
