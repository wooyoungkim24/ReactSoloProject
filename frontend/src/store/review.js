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
    const res = await csrfFetch(`/api/review/${idJoin}`);
    if(res.ok){
        const reviews = await res.json();
        dispatch(load(reviews))
    }
}

const initialState = {
    single: {},
    closeReviewsTotal: {}
}
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADMULTI:
            const closeReviews = {};

            action.close.forEach(ele => {

                closeReviews[ele.businessId] = ele;
            });
            return {
                ...state,
                ...closeReviews
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
