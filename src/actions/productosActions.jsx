// Solo describen lo que esta pasando en la aplicacción
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    // PRODUCTO_ELIMINADO_ERROR,
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

// funcion que descarga los productos de la base de datos
export function obtenerProductoAction(){
    return async (dispatch)=>{
        dispatch(descargarProductos())
        try {
            const respuesta = await clienteAxios.get('/productos')      
            dispatch(descargaProductosExitosa(respuesta.data))                
        } catch (error) {
            console.log('debug', error);
            dispatch(descargaProductosError())
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})
const descargaProductosExitosa = productos =>({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos

})
const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

// Selecciona y elimina el producto
export function borrarProductoAction(id){
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id))
        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())
        } catch (error) {
            
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id 
})

const eliminarProductoExito = () =>({
    payload: PRODUCTO_ELIMINADO_EXITO
})

