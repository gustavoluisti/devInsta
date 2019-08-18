import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import FeedReducer from './reducers/FeedReducer';

const Reducers = combineReducers({
    auth:AuthReducer,
    feed:FeedReducer
})

export default Reducers;