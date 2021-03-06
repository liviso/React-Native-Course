export const reducer = (state, action) => {
    if (!action) return state;
    switch (action.type) {

        case 'ADD_FILM':
            return { ...state, films: [...state.films, action.film] };
        case 'SET_SELECTED_DATE':
            return { ...state, selected_date: action.date }
        case 'SET_SELECTED_FILM':
        console.log("Selected film: "+action.film.title);
            return {...state, selected_films: action.film};
        case 'HIDE_FILM_DETAILS':
        return {...state, showFilmDetails: false}
        case 'SHOW_FILM_DETAILS':
        return {...state, showFilmDetails: true}
        case "SET_SHOWINGS":
      return { ...state, showings: action.showings };
        default:
            return state;
    }

} 