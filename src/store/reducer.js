import { combineReducers } from "redux";

import { reducer as recommandReducer } from '../pages/discover/c-pages/recommand/store/index.js'


const Reducer = combineReducers({
    recommend:recommandReducer,
})

export  default Reducer;