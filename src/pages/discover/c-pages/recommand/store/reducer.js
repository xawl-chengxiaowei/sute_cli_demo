
import * as actionTypes from './constant'

const defaultState = {

    topBanners: []

}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGETOPBANNERS:
            return { ...state,topBanners:action.topBanners }

        default:
            return state;

    }  
}


export default reducer