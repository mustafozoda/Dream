import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { green, red } from "@mui/material/colors";

export default function SelectStatus({ setStatus, status }) {
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl
      variant="standard"
      sx={{
        m: 1,
        minWidth: {
          xs: 120,
          sm: 180,
        },
        color: red[700],
      }}
    >
      <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={status}
        onChange={handleChange}
        label={status}
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem sx={{ color: green[700] }} value={"completed"}>
          Completed
        </MenuItem>
        <MenuItem sx={{ color: red[700] }} value={"incomplete"}>
          Incompleted
        </MenuItem>
      </Select>
    </FormControl>
  );
}
