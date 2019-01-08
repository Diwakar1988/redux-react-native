/*
This file acts as all reducers registry 
*/
import {combineReducers} from 'redux'
import people from './people'

const rootReducer = combineReducers({
    people,
    //you can define all reducers of your app here(if any)
})

export default rootReducer