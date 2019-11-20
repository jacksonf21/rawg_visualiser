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

describe('Game Ratings Object', () => {
  describe('Should contain property and values', () => {
    it ('property: title, value: exceptional', () => {
      const result = checkGameRatingFields(rawData).some(i => i.title === 'exceptional');
      
      expect(result).toBe(true)
    })
    
    it ('property: title, value: recommended', () => {
      const result = checkGameRatingFields(rawData).some(i => i.title === 'recommended');
      
      expect(result).toBe(true)
    })
    
    it ('property: title, value: meh', () => {
      const result = checkGameRatingFields(rawData).some(i => i.title === 'meh');

      expect(result).toBe(true)
    })
    
    it ('property: title, value: skip', () => {
      const result = checkGameRatingFields(rawData).some(i => i.title === 'skip');
      
      expect(result).toBe(true)
    })

  })
})