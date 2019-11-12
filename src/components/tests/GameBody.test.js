import React from 'react';
const { checkGameRatingFields } = require('../../helper/helper');

const rawData = {
  name: 'Plague Tale Innocence', 
  rating: 4.25, 
  ratings: [
    {id: 5, title: 'exceptional'},
    {id: 4, title: 'recommended'},
    {id: 1, title: 'skip'}
  ] 
}

it ('titles exceptional', () => {
  const result = checkGameRatingFields(rawData).some(i => i.title === 'exceptional');

  expect(result).toBe(true)
})

it ('titles recommended', () => {
  const result = checkGameRatingFields(rawData).some(i => i.title === 'recommended');

  expect(result).toBe(true)
})

it ('titles meh', () => {
  const result = checkGameRatingFields(rawData).some(i => i.title === 'meh');

  expect(result).toBe(true)
})

it ('titles skip', () => {
  const result = checkGameRatingFields(rawData).some(i => i.title === 'skip');

  expect(result).toBe(true)
})

