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
    const error = useSelector( state => state.productos.error)
    const cargando = useSelector( state => state.productos.loading)
    
    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>
            { 
                error
                    ?<p className="font-weight-bold alert alert-danger text-cenrter  mt-4">Existio un error</p>
                    : null
            }
            {
                cargando
                    ? <p className="text-center ">Cargando...</p>
                    : null
            }
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
                        ? <tr><td ><p className="text-center">No hay productos</p></td></tr>
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
