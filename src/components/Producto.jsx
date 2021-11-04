import React from 'react'
import { Link } from 'react-router-dom'
// Redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction } from '../actions/productosActions'

const Producto = ({producto}) => {
    const {nombre, precio, id } = producto

    const dispatch = useDispatch()
    // Confirmar si desea eliminarlo
    const confirmarEliminarProducto = id =>{
        // Preguntar 

        // Pasar al usuario
        dispatch(borrarProductoAction(id))
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
                <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
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
