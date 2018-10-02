

const fetchFilmsMiddleware = ({dispatch, getState}) => next => action => {
    if(action.type === 'FETCH_FILMS'){
       

        fetch('http://localhost:5000/api/films')
        .then(res => res.json())
        .then(res => {
            res.forEach(film=>{
                dispatch({type: 'ADD_FILM', film})
             } )
        }
        )
    }
    next(action)
}


export default [ fetchFilmsMiddleware ];