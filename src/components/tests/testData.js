const mockGameData = [
  {
    name: 'Apex Legends', 
    rating: 3.74, 
    ratings: [
      {count: 148, id: 5, percent: 18.07, title: 'exceptional'},
      {count: 411, id: 4, percent: 50.18, title: 'recommended'},
      {count: 208, id: 3, percent: 25.4, title: 'meh'},
      {count: 52, id: 1, percent: 6.35, title: 'skip'},
    ], 
    ratingsCount: 814
  },
  {
    name: 'Borderlands', 
    rating: 3.88, 
    ratings: [
      {count: 75, id: 5, percent: 19.48, title: 'exceptional'},
      {count: 233, id: 4, percent: 57.92, title: 'recommended'},
      {count: 69, id: 3, percent: 17.92, title: 'meh'},
      {count: 18, id: 1, percent: 4.68, title: 'skip'},
    ], 
    ratingsCount: 385
  },
  {
    name: 'Sekiro: Shadows Die Twice', 
    rating: 4.37, 
    ratings: [
      {count: 367, id: 5, percent: 58.53, title: 'exceptional'},
      {count: 188, id: 4, percent: 29.98, title: 'recommended'},
      {count: 41, id: 3, percent: 6.54, title: 'meh'},
      {count: 31, id: 1, percent: 4.94, title: 'skip'},
    ], 
    ratingsCount: 621
  }
];

module.exports = { mockGameData }