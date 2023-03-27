const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='addItem'>
            Add item
        </label>
        <input
          id='search'
          type='text'
          role='searchbox'
          placeholder='Search items ...'
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
    </form>
  )
}

export default SearchItem