import { csrfFetch } from './csrf';

const LOADMULTI = 'closeBusinesses/LOAD';
const LOAD_ONE = 'one/LOAD'
const CITIES_LOAD = 'cites/load'
const CLEAR = 'businesses/clear'
const LOAD_AMEN = 'amenities/load'
const LOAD_ALL = 'allBusinesses/load'

const load_city = (cities) => ({
    type: CITIES_LOAD,
    cities
})
const load_all = (all) =>({
    type: LOAD_ALL,
    all
})

const load = close =>({
    type: LOADMULTI,
    close
})

const load_one = one =>({
    type: LOAD_ONE,
    one
})

const clear = () =>({
    type: CLEAR
})

const load_amen = amen =>({
    type: LOAD_AMEN,
    amen
})

export const clearBusinesses = clear();


export const getCities = () => async dispatch =>{
    const res = await csrfFetch('/api/city');
    if(res.ok){
        const cities = await res.json();
        dispatch(load_city(cities))
        return cities;
    }
}

export const getBusiness = (id) => async dispatch =>{
    const res = await csrfFetch(`/api/business/${id}`);
    if(res.ok){
        const one = await res.json();
        dispatch(load_one(one))

    }
}
export const getBusinessAmenities = (id) => async dispatch =>{
    const res = await csrfFetch(`/api/business/amenities/${id}`);
    if(res.ok){
        const oneAmenity = await res.json();
        // console.log('look at me',oneAmenity.Amenity)
        dispatch(load_amen(oneAmenity))
    }
}

export const getBusinessesLocation = (coordinates) => async dispatch => {
    // console.log('testingcoord', coordinates)
    try{
        const response = await csrfFetch(`/api/business/coordinates/${coordinates}`);
        // console.log('this is',await response.json())
        if (response.ok) {

            const close = await response.json();
            dispatch(load(close));
            return close;
        }
    }catch(e){
        // console.log('error finder',e)
        throw (e)
    }

};
export const getBusinessesCity = (city) => async dispatch => {
    const response = await csrfFetch(`/api/business/location/${city}`);

    if (response.ok) {
        const close = await response.json();
        // console.log('close', close)
        dispatch(load(close));
        return close;
    }
};

export const getAllBusinesses = () => async dispatch =>{
    const response = await csrfFetch('/api/business');
    if(response.ok){
        const businesses= await response.json();
        dispatch(load_all(businesses));
    }
}

const initialState = {
    closeBusinesses: {},
    single: {},
    cities: [],
    amenities: {},
    all: []
}

const businessReducer = (state = initialState, action) =>{
    switch (action.type){
        case LOADMULTI:
            const closeBusinesses = {};
            action.close.forEach(ele =>{
                closeBusinesses[ele.id] = ele
            });
            return {
                ...state,
                closeBusinesses: {...closeBusinesses}
            }
        case LOAD_ONE:
            return{
                ...state,
                single: action.one
            }
        case CITIES_LOAD:
            return{
                ...state,
                cities: action.cities
            }
        case CLEAR:
            return {
                ...initialState
            }
        case LOAD_ALL:
            return {
                ...state,
                all: [...action.all]
            }
        case LOAD_AMEN:{
            return{
                ...state,
                amenities: {...action.amen.Amenity}
            }
        }
        default:
            return state;

    }
}

export default businessReducer
