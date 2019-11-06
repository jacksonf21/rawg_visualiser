export const SET_GAME = 'SET_GAME';
export const SET_SELECT = 'SET_SELECT';
export const SET_CATEGORY_DATA = 'SET_CATEGORY_DATA';
  
export default function reducer(state, action) {
  switch (action.type) {
    case SET_GAME:
      return {
        ...state, game: [action.value]
      }

    case SET_CATEGORY_DATA: 
      let category;

      action.value === 'http://localhost:8000'
      ? category = 0 :
      action.value === 'http://localhost:8000/this-month'
      ? category = 1 : category = 2;

      return {
        ...state, category: category
      }
    
    case SET_SELECT:
      return {
        ...state, select: action.value
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

