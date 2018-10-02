export const reducer = (state, action) => {
    if (!action) return state;
    console.log("1");
   switch(action.type){
       
       case 'ADD_FILM':
        return {...state, films:[...state.films, action.film]};
        default :
        return state;
   }
    
} 