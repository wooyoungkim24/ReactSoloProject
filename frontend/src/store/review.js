import { csrfFetch } from './csrf';

const LOADMULTI = 'closeBusinessesReviews/LOAD';
const LOAD_ONE = 'one/LOAD'
const CITIES_LOAD = 'cites/load'
const LOAD_ONE_REVIEW = 'oneReview/load'
const LOAD_ALL = 'allReviews/load'

const load_city = (cities) => ({
    type: CITIES_LOAD,
    cities
})

const load = close => ({
    type: LOADMULTI,
    close
})

const load_one = one => ({
    type: LOAD_ONE_REVIEW,
    one
})

const load_all = all =>({
    type: LOAD_ALL,
    all
})

export const getAllReviews = () => async dispatch =>{
    const res = await csrfFetch('/api/review');
    if(res.ok){
        const reviews = await res.json();
        dispatch(load_all(reviews));
    }
}


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

export const getReviewsSingle = (id) => async dispatch =>{
    const res = await csrfFetch(`/api/review/single/${id}`)
    // console.log('why my reivews wrong', await res.json())
    if(res.ok){
        const reviews = await res.json();
        // console.log('why my reivews wrong', reviews)
        dispatch(load_one(reviews))
    }
}


export const createReview = (payload) => async dispatch => {
    const { rating, title, reviewText, id, userId } = payload;
    try {
        const res = await csrfFetch(`/api/review`, {
            method: 'POST',
            body: JSON.stringify({
                rating,
                title,
                reviewText,
                businessId: id,
                userId
            }),
        })
        if (res.ok) {
            const newReview = await res.json();
            return newReview;
        }
    } catch (e) {
        const error = await e.json();
        return error;
    }

}

export const deleteReview = (payload) => async dispatch =>{
    const {id, userId} = payload;
    const sendString = id.toString() + "_" + userId.toString();
    const res = await csrfFetch(`/api/review/${sendString}`, {
        method: 'DELETE'
    })
}

export const editReview = (payload) => async dispatch =>{
    const { rating, title, reviewText, id, userId } = payload;
    const res = await csrfFetch(`/api/review`, {
        method: 'PUT',
        body: JSON.stringify({
            rating,
            title,
            reviewText,
            businessId: parseInt(id),
            userId
        }),
    })
    // console.log('testing to here now', await res.json())
    // console.log('whre is my test',res.ok)
    if (res.ok) {
        const updatedReview = await res.json();
        // console.log(updatedReview)
        return updatedReview;
    }
}

const initialState = {
    single: {},
    closeReviews: {},
    all: []
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
        case LOAD_ONE_REVIEW:
            const newSingle = {};
            console.log('this is the action',action.one)
            action.one.forEach(ele =>{
                newSingle[ele.id] = ele
            })
            return{
                ...state,
                single: {...newSingle}
            }
        case LOAD_ALL:
            return{
                ...state,
                all:[...action.all]
            }
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
