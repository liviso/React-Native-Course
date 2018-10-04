

const fetchFilmsMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.type === 'FETCH_FILMS') {

        fetch('http://localhost:5000/api/films')
            .then(res => res.json())
            .then(res => {
                res.forEach(film => {
                    dispatch({ type: 'ADD_FILM', film })
                })
            }
            )
    }
    next(action)
}

const showingsDateMiddleware = ({ dispatch, getState }) => next => action => {
    next(action);
    if (action.type === "SET_SELECTED_DATE" || action.type === "SET_SELECTED_FILM") {
      const selected_date = getState().selected_date.toISOString().split('T')[0]
        console.log(getState().selected_films);

      const film_id = getState().selected_films.id;

      console.log(`http://localhost:5000/api/showings/${film_id}/${selected_date}`);
      fetch(`http://localhost:5000/api/showings/${film_id}/${selected_date}`)
        .then(res => {
            return res.json();
        })
        .then(showings =>{
            console.log(showings);
          //  dispatch({ type: "SET_SHOWINGS", showings })
        })
    }
  }


export default [fetchFilmsMiddleware, showingsDateMiddleware];