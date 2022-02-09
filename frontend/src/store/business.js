import { csrfFetch } from './csrf';

const LOADMULTI = 'closeBusinesses/LOAD';
const LOAD_ONE = 'one/LOAD'
const CITIES_LOAD = 'cites/load'


const load_city = (cities) => ({
    type: CITIES_LOAD,
    cities
})

const load = close =>({
    type: LOADMULTI,
    close
})

const load_one = one =>({
    type: LOAD_ONE,
    one
})

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

export const getBusinessesLocation = ({coordinates}) => async dispatch => {
    // console.log('testingcoord', coordinates)
    const response = await csrfFetch(`/api/business/coordinates/${coordinates}`);

    if (response.ok) {
        const close = await response.json();
        dispatch(load(close));
        return close;
    }
};
export const getBusinessesCity = ({city}) => async dispatch => {
    const response = await csrfFetch(`/api/business/location/${city}`);

    if (response.ok) {
        const close = await response.json();
        dispatch(load(close));
    }
};

const initialState = {
    closeBusinesses: {},
    single: {},
    cities: []
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
        default:
            return state;

    }
}

export default businessReducer
