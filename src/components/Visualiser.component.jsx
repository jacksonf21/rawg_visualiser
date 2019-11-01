import React, { useEffect } from 'react';
import * as d3 from 'd3';
const { d3test } = require('../d3test');


export default function Visualiser({ ratings }) {
  let allRatings = '';

  const data = [];

  //this is empty
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
  }
  
  useEffect(() => {
    if (d3.select(".piechart")['_groups'][0] !== null) {
      const svg = document.getElementsByClassName('piechart')[0];
      const piechart = svg.getElementsByTagName('g');
      
      //CHOSE TO DELETE ANY EXISTING PIECHART ON EACH NEW RENDER
      if (piechart.length) piechart[0].remove();
      d3test(data);
    }
  })

  return (
    <div>
      {ratings && (
        allRatings
      )}
      <svg className='piechart' width='300' height='200'></svg>
    </div>
  );
}