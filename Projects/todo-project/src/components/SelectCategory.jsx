import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { green, red } from "@mui/material/colors";

export default function SelectCategory({ data, category, setCategory }) {
  const uniqueCategories = [...new Set(data.map((el) => el.category))];
  // console.log(uniqueCategories[0]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl
      variant="standard"
      sx={{ m: 1, minWidth: 160, color: red[700] }}
    >
      <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={category}
        onChange={handleChange}
        label={category}
      >
        <MenuItem value={"all"}>All</MenuItem>
        {uniqueCategories.map((el) => (
          <MenuItem key={el} value={el}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
