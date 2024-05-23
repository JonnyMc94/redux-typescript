import { combineReducers } from 'redux'
import respositoriesReducer from './respositoriesReducer'

const reducers = combineReducers({
    repositories: respositoriesReducer
});

export default reducers;