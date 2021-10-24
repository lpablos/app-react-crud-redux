import { combineReducers } from 'redux'

// Mutiples reduces
import productosReducer from './productosReducer'

// definicion de los reduces 
export default combineReducers({
    productos: productosReducer
})



