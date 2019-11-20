import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Visualiser from '../Visualiser.component';

const fullRatingsObject = [
  {count: 148, id: 5, percent: 18.07, title: 'exceptional'},
  {count: 411, id: 4, percent: 50.18, title: 'recommended'},
  {count: 208, id: 3, percent: 25.4, title: 'meh'},
  {count: 52, id: 1, percent: 6.35, title: 'skip'}
];

const ratingsClassNames = [
  'category-rating-container__exceptional',
  'category-rating-container__recommended',
  'category-rating-container__meh',
  'category-rating-container__skip'
];

const categorySelect = (index) => {
  const { getAllByTestId } = render(<Visualiser ratings= {fullRatingsObject} />)
  const categories = getAllByTestId('category-rating')
  console.log(categories)
  fireEvent.click(categories[index])
  const pieClass = getAllByTestId('pie')[0].classList[1];

  return pieClass
};

describe('elements className: category-ratings-container__', () => {
  
  describe('is passed ratings with all categories', () => {
    it('appends exceptional, recommended, meh, skip to className', () => {
      const { getAllByTestId } = render(<Visualiser ratings={fullRatingsObject}/>)
      const categories = getAllByTestId('category-rating').map(uiElement => uiElement.className);

      expect(categories).toEqual(ratingsClassNames)
    })
  })

})

describe('element className: pieClass', () => {
  describe('appends selected category to the className', () => {
    
    it('defaults to exceptional', () => {
      const { getAllByTestId } = render(<Visualiser ratings= {fullRatingsObject} />)
      const pieClass = getAllByTestId('pie')[0].classList[1];

      expect(pieClass).toEqual('piechart-container__piechart--exceptional-selected')
    })

    it('selects recommended', () => {
      expect(categorySelect(1)).toEqual('piechart-container__piechart--recommended-selected')
    })

    it('selects meh', () => {
      expect(categorySelect(2)).toEqual('piechart-container__piechart--meh-selected')
    })

    it('selects skip', () => {
      expect(categorySelect(3)).toEqual('piechart-container__piechart--skip-selected')
    })


  })
});

