import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts, setSearchQuery } from '../reducers/product/productSlice';

export const Search = () => {
  const [searchQueryForm, setSearchQueryForm] = useState('');

  const dispatch = useDispatch();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchQueryForm));
  };

  const handleClear = () => {
    setSearchQueryForm('');
  };

  return (
    <form onSubmit={handleSearch} className="form text-center">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchQueryForm}
          onChange={(e) => setSearchQueryForm(e.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
          {searchQueryForm !== '' && (
            <button
              type="button"
              className="btn btn-secondary ml-2"
              onClick={handleClear}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </form>
  );
};
