import { TextField } from "@mui/material";

const Search = (props)=>{
    const {onChange,value} = props;

    return <TextField 
                label = 'search'
                type = 'search' 
                variant="standart"
                
                value = {value} 
                onChange={onChange}
            />

}
// пока не надо

export default Search;