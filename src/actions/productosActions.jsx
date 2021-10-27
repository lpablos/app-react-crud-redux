// Solo describen lo que esta pasando en la aplicacción
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types'

import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

export function crearNuevoProductoAction (producto) {
    return async (dispatch) =>{
        // Insecion en base de datos
        // Se ejecutan los reduces para modificar le state
        // console.log('Desde el action', producto);
        dispatch(agregarProducto())
        try {
            // Insertar en API con AXIOS
            await clienteAxios.post('/productos', producto)
            // Inserta en el STATE de REDUX
            dispatch(agregarProductoExito(producto))
            Swal.fire(
                'Correcto', 
                'El producto se agrego correctamente',
                'success'
            )
        } catch (error) {
            console.log("Error de API - DEBUG :", error);
            // Actualizas STATE de REDUX 
            dispatch(agregarProductoError(true))
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un errror, intenta de nuevo'
            })
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

