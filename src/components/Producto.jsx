import React from 'react'
import { useHistory } from 'react-router-dom'
// Redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productosActions'
import Swal from 'sweetalert2'

const Producto = ({producto}) => {
    const {nombre, precio, id } = producto

    const dispatch = useDispatch()
    let history = useHistory();// Habiliatr history para redireccion

    // Confirmar si desea eliminarlo
    const confirmarEliminarProducto = id =>{
        // Preguntar 
        Swal.fire({
            title: '¿ Estas seguro ?',
            text: "Un producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(borrarProductoAction(id))               
            }
          })
        // Pasar al usuario
    }
    // Funcion que redirige de forma programadas

    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditar(producto))
        history.push(`/productos/editar/${producto.id}`)
    }

    return (
        <tr>
            <td>
                {nombre}
            </td>
            <td>
                <span className="font-weight-bold">${precio}</span>
            </td>
            <td>    
                
                <button 
                    onClick={ ()=>redireccionarEdicion(producto)}
                    type="button" 
                    className="btn btn-primary mr-2"
                >
                    Editar
                </button>
                <button 
                    onClick={ ()=>confirmarEliminarProducto(id) }
                    type="button" 
                    className="btn btn-danger"
                    >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Producto
