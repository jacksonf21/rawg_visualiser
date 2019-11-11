import React from 'react';

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
      <input type='text' placeholder='Search Games' onChange={(e) => onSearchType(e)}/>
      <button>Go</button>
      {results}
    </aside>
  ); 
}