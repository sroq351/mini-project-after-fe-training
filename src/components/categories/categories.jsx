import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import styles from "./categories.module.css";

export const Categories = ({ category, onCategoryChange }) => {
  return (
    <div className={styles.categories}>
      <InputLabel id="demo-simple-select-label"> Product category </InputLabel>
      <Select
        value={category}
        onChange={onCategoryChange}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value="furniture"> Furniture</MenuItem>
        <MenuItem value="tablets"> Tablets</MenuItem>
        <MenuItem value="groceries"> Groceries</MenuItem>
      </Select>
    </div>
  );
};
