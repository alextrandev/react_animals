export default function SearchBar({searchChangeHandler}) {
  return (
    <div className="p-10 flex gap-1 items-center">
        <span className="material-symbols-rounded">search</span>
        <input 
            className="border-2 rounded"
            type="text"
            name="animal"
            id="animal"
            onChange={searchChangeHandler}
        />
    </div>
  )
}
