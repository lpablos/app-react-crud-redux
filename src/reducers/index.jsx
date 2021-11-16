import { combineReducers } from 'redux'

// Mutiples reduces
import productosReducer from './productosReducer'
import alertaReducer from './alertaReducer'

// definicion de los reduces 
export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
})



