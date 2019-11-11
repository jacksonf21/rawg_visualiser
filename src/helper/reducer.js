export const SET_GAME = 'SET_GAME';
export const SET_SELECT = 'SET_SELECT';
export const SET_CATEGORY_DATA = 'SET_CATEGORY_DATA';
export const NEXT_GAME = 'NEXT_GAME';
export const PREVIOUS_GAME = 'PREVIOUS_GAME';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const SET_ARROWS = 'SET_ARROWS';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_GAME:
      return {
        ...state, game: action.value
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

    case NEXT_GAME:
      if (action.value === state.game.length - 1) return { ...state };
      const selectedValue = action.value + 1;
      
      return {
        ...state, select: selectedValue
      }

    case PREVIOUS_GAME:
      if (action.value === 0) return { ...state };
      const selectedValuePrev = action.value - 1;
        
      return {
        ...state, select: selectedValuePrev
      }

    case TOGGLE_MENU:
      console.log('fire')
      if (action.value === 0) return { ...state, menu: 1 }
      else return { ...state, menu: 0 }

    case TOGGLE_SEARCH:
      if (action.value === 0) return { ...state, search: 1 }
      else return { ...state, search: 0 }

    case SET_ARROWS:
      if (action.value.length === 1) {
        return { ...state, arrows: 0 }
      } else {
        return { ...state, arrows: 1 }
      }

    case SET_SEARCH_TEXT:
      return {
        ...state, searchText: action.value
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

