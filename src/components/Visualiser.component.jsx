import React from 'react';

export default function Visualiser({ ratings }) {
  
  const exceptional = ratings.find(rating => rating.title === 'exceptional')

  return (
    <div>
      <div>
        {exceptional.title}
      </div>
      <div>
        {exceptional.percent}
      </div>
      <div>
        {exceptional.count}
      </div>
    </div>
  );
}