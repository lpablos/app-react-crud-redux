// Solo describen lo que esta pasando en la aplicacción

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types'

export function crearNuevoProductoAction (producto) {
    return (dispatch) =>{
        // Insecion en base de datos
        // Se ejecutan los reduces para modificar le state
        // console.log('Desde el action', producto);
        dispatch(agregarProducto())
        try {
            dispatch(agregarProductoExito(producto))
        } catch (error) {
            dispatch(agregarProductoError(true))
        }
    }
}

const agregarProducto = () => ({
    type : AGREGAR_PRODUCTO,
    payload : true
})
const agregarProductoExito = producto =>({
    type : AGREGAR_PRODUCTO_EXITO,
    payload : producto
})
const agregarProductoError = estado =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
}) 

