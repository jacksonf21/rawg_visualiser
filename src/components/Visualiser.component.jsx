import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import '../stylesheets/visualiser.css';

const { d3test } = require('../d3test');
const classNames = require('classnames');

export default function Visualiser({ ratings }) {
  const [ratingCategory, setRatingCategory] = useState(0);
  let allRatings = '';
  let ratingPercent = 0;
  const data = [];

  const selectRatingCategory = (num) => {
    setRatingCategory(num);
  };

  const pieClass = classNames('piechart-container__piechart', {
    'piechart-container__piechart--exceptional-selected' : ratingCategory === 0,
    'piechart-container__piechart--recommended-selected' : ratingCategory === 1,
    'piechart-container__piechart--skip-selected' : ratingCategory === 2,
    'piechart-container__piechart--meh-selected' : ratingCategory === 3
  });

  if (ratings) {
    const sortedRatings = ratings.sort((b, a) => (b.id > a.id) ? -1 : 1);

    allRatings = sortedRatings.map((rating, idx) => {
      data.push(Number(rating.percent.toFixed(0)));
      return (
        <div key={`category-rating-container__${rating.title}`} className={`category-rating-container__${rating.title}`} onClick={() => selectRatingCategory(idx)}>
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
    });

    ratingPercent = sortedRatings.map(rating => {
      return (
        rating.percent
      )
    })
  }
  
  useEffect(() => {
    if (d3.select(".piechart-container__piechart")['_groups'][0] !== null) {
      const svg = document.getElementsByClassName('piechart-container__piechart')[0];
      const piechart = svg.getElementsByTagName('g');

      //CHOSE TO DELETE ANY EXISTING PIECHART ON EACH NEW RENDER
      if (piechart.length) piechart[0].remove();
      d3test(data, ratingPercent[ratingCategory]);
    }
  })

  return (
    <div>
      <div className='piechart-container'>
        {/* <div className='piechart-container__overlay'>{`${ratingPercent[ratingCategory]}%`}</div> */}
        <svg className={pieClass} width='300' height='200'></svg>
      </div>
      
      {ratings && (
        <div className='category-rating-container'>
          {allRatings}
        </div>
      )}
    </div>
  );
}