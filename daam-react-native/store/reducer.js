export const reducer = (state, action) => {
    if (!action) return state;
    switch (action.type) {

        case 'ADD_FILM':
            return { ...state, films: [...state.films, action.film] };
        case 'SET_SELECTED_DATE':
            return { ...state, selected_date: action.date }
        default:
            return state;
    }

} 