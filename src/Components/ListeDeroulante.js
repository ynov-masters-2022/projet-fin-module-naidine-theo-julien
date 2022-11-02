import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ListeDeroulante  = () => (
     <FormControl>
        <InputLabel>Ville</InputLabel>
        <Select>
            <MenuItem> Bonjour</MenuItem>
            <MenuItem> Le </MenuItem>
            <MenuItem> Monde </MenuItem>
        </Select>
     </FormControl>
)

export default ListeDeroulante;