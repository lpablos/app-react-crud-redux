import React, { Fragment, useEffect } from 'react'
import Producto from './Producto'

import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductoAction } from '../actions/productosActions'



const Productos = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        // Consultar la api
        const cargarProductos = () => dispatch(obtenerProductoAction())        
        cargarProductos()
        
    }, [dispatch])

    // Obtener el state de redux
    const productos = useSelector( state => state.productos.productos)
    
    
    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        productos.length === 0 
                        ? 'No hay productos' 
                        : (productos.map(producto =>(
                            <Producto
                                key={producto.id}
                                producto = {producto}
                            />
                        )))
                    }
                </tbody>
            </table>
        </Fragment>
        
    )
}

export default Productos
