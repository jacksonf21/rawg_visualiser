import React from 'react';

export default function Visualiser({ ratings }) {
  let allRatings = '';

  if (ratings) {
    const sortedRatings = ratings.sort((b, a) => (b.id > a.id) ? -1 : 1);

    allRatings = sortedRatings.map(rating => {
      return (
        <div>
          <div>
            {rating.title}
          </div>
          <div>
            {rating.percent}
          </div>
          <div>
            {rating.count}
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {ratings && (
        allRatings
      )}
    </div>
  );
}