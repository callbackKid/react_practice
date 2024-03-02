import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { useDispatch } from 'react-redux'
import { maxPriceChange, minPriceChange, sortChange } from '../../store/filterSlice'

export const FilterBar = () => {
  const dispatch = useDispatch()
  // поменять форму на box
  // инпуты поменять
  return (
    <Box component="form" sx={{ m: 1 }}>
      <TextField
        type="number"
        id="price"
        placeholder="from"
        label="min price"
        onChange={(e) => dispatch(minPriceChange(e.target.value))}
      />
      <TextField
        type="number"
        placeholder="to"
        label="max price"
        onChange={(e) => dispatch(maxPriceChange(e.target.value))}
      />
      <FormControl sx={{ width: '200px' }}>
        <InputLabel htmlFor="sort">Sort</InputLabel>
        <Select id="sort" label="sort" onChange={(e) => dispatch(sortChange(e.target.value))}>
          <MenuItem>by default</MenuItem>
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
