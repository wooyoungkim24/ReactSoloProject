import { csrfFetch } from './csrf';

const LOADMULTI = 'closeBusinessesReviews/LOAD';
const LOAD_ONE = 'one/LOAD'
const CITIES_LOAD = 'cites/load'


const load_city = (cities) => ({
    type: CITIES_LOAD,
    cities
})

const load = close => ({
    type: LOADMULTI,
    close
})

const load_one = one => ({
    type: LOAD_ONE,
    one
})



export const getReviews = (id) => async dispatch =>{
    const idJoin = id.join("_")
    // console.log(idJoin)
    const res = await csrfFetch(`/api/review/${idJoin}`);

    if(res.ok){
        const reviews = await res.json();
        console.log('what is wrong', reviews)
        console.log('my reviews',reviews['reviews'])
        // console.log(reviews['reviews'])
        dispatch(load(reviews['reviews']))
        return reviews;
    }
}

const initialState = {
    single: {},
    closeReviews: {}
}
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADMULTI:
            const closeReviews = {};

            action.close.forEach(ele => {
                if(!closeReviews[ele.businessId]){
                   closeReviews[ele.businessId] = [ele];
                }else{
                    closeReviews[ele.businessId].push(ele)
                }

            });
            return {
                ...state,
                closeReviews: {...closeReviews}
            }
        // case LOAD_ONE:
        //     return{
        //         ...state,
        //         single: action.one
        //     }
        // case CITIES_LOAD:
        //     return{
        //         ...state,
        //         cities: action.cities
        //     }
        default:
            return state;

    }
}


export default reviewsReducer;
