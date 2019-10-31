import React from 'react';
import * as d3 from 'd3';

export default function Visualiser({ ratings }) {
  let allRatings = '';

  const data = [];
  const pie = d3.pie();

  //this is empty
  let arcs = pie(data);
  let arc = d3.arc()(arcs);
  
  if (ratings) {
    const sortedRatings = ratings.sort((b, a) => (b.id > a.id) ? -1 : 1);

    allRatings = sortedRatings.map(rating => {
      data.push(Number(rating.percent.toFixed(0)));
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
    arcs = pie(data);
    arc = d3.arc()(arcs)
    console.log(arcs);
    console.log(arc);
  }

  return (
    <div>
      {ratings && (
        allRatings
      )}
      <svg width='300' height='200'></svg>
    </div>
  );
}