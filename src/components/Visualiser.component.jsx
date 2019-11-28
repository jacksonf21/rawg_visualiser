import React, { useState, useEffect } from 'react';
import '../stylesheets/visualiser.css';

const { d3Svg } = require('../d3Svg');
const { pieClassCheck } = require('../helper/customClassnames');

export default function Visualiser({ ratings }) {
  const [ratingCategory, setRatingCategory] = useState(0);
  
  let allRatings = '';
  let ratingsData = 0;
  const data = [];

  const pieClass = pieClassCheck(ratingCategory);

  if (ratings) {
    const sortedRatings = ratings.sort((b, a) => (b.id > a.id) ? -1 : 1);

    allRatings = sortedRatings.map((rating, idx) => {
      data.push(Number(rating.percent.toFixed(0)));
      return (
        <div 
          key={`category-rating-container__${rating.title}`} 
          className={`category-rating-container__${rating.title}`} 
          onClick={() => setRatingCategory(idx)} 
          tabIndex='0'
          data-testid='category-rating'
        />
      )
    });

    ratingsData = sortedRatings.map(rating => {
      return (
        [rating.percent, `${rating.title[0].toUpperCase()}${rating.title.slice(1, rating.title.length)}`]
      )
    })
  } 
  
  useEffect(() => {
    if (pieClassCheck()) {
      const svg = document.getElementsByClassName('piechart-container__piechart')[0];
      const piechart = svg.getElementsByTagName('g');

      //CHOSE TO DELETE ANY EXISTING PIECHART ON EACH NEW RENDER
      if (piechart.length) piechart[0].remove();
      d3Svg(data, ratingsData[ratingCategory]);
    }
    console.log('test')
  })

  return (
    <div>
      <div className='piechart-container'>
        <svg className={pieClass} data-testid='pie' width='300' height='200'></svg>
      </div>
      
      {ratings && (
        <datalist className='category-rating-container'>
          {allRatings}
        </datalist>
      )}
    </div>
  );
}