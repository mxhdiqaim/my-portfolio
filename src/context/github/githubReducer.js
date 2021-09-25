
import { 
    SET_LOADING, 
    GET_REPOS 
} from '../types';


// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}