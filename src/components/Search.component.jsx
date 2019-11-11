import React from 'react';

export default function Search({ searchClass, onSearchType }) {
  return (
    <aside className={searchClass}>
      <input type='text' placeholder='Search Games' onChange={(e) => onSearchType(e)}/>
      <button>Go</button>
    </aside>
  ); 
}