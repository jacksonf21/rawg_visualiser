const { checkGameRatingFields } = require('../../helper/helper');

//ARRANGE
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
      //ACT
      const result = checkGameRatingFields(rawData).some(i => i.title === 'exceptional');
      
      //ASSERT
      expect(result).toBe(true)
    })
    
    it ('property: title, value: recommended', () => {
      //ACT
      const result = checkGameRatingFields(rawData).some(i => i.title === 'recommended');
      
      //ASSERT
      expect(result).toBe(true)
    })
    
    it ('property: title, value: meh', () => {
      //ACT
      const result = checkGameRatingFields(rawData).some(i => i.title === 'meh');

      //ASSERT
      expect(result).toBe(true)
    })
    
    it ('property: title, value: skip', () => {
      //ACT
      const result = checkGameRatingFields(rawData).some(i => i.title === 'skip');
      
      //ASSERT
      expect(result).toBe(true)
    })

  })
})