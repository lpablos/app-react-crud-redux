// Solo describen lo que esta pasando en la aplicacción

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types'

export function crearNuevoProductoAction() {
    return () =>{
        // Insecion en base de datos
        // Se ejecutan los reduces para modificar le state
        console.log('Desde el action');
    }
}

