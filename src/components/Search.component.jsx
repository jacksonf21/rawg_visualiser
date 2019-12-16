import React from 'react';
import '../stylesheets/search.css'

export default function Search({ searchClass, onSearchType, searchFields, setSearchData }) {

  const results = searchFields.map((field, idx) => {
    return (
      <div onClick={() => setSearchData(idx)}>
        {field.name}
      </div>
    );
  });

  return (
    <aside className={searchClass}>
      <header className='search-header'>
        <input className='search-games' type='text' placeholder='Search Games' onChange={(e) => onSearchType(e)}/>
        <button className='search-cancel'>Clear</button>
      </header>
      {searchFields.length === 0 && (
        <main>
          <p className='search-paragraph'>Explore other game details and reviews</p> 
        </main>
      )}
      <main className='search-results'>
        {results}
      </main>
    </aside>
  ); 
}