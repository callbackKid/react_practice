import { useDispatch } from 'react-redux'
import { maxPriceChange, minPriceChange, sortChange } from '../../store/filterSlice'

export const FilterBar = () => {
  const dispatch = useDispatch()

  return (
    <form>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          placeholder="from"
          onChange={(e) => dispatch(minPriceChange(e.target.value))}
        />
        <input
          type="number"
          placeholder="to"
          onChange={(e) => dispatch(maxPriceChange(e.target.value))}
        />
      </label>
      <label htmlFor="sort">Sorted</label>
      <select id="sort" onChange={(e) => dispatch(sortChange(e.target.value))}>
        <option>by default</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  )
}
