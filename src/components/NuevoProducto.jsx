import React, { useState } from 'react'
// Manejadores de redux
// useDispatch -> Ejecuta las acciones
// useSelector -> Acceder al state dentro del componente
import { useDispatch, useSelector } from 'react-redux'
// Actions de redux
import  { crearNuevoProductoAction } from '../actions/productosActions'

const NuevoProducto = () => {
    // State del componente
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    // Utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch()
    // Llamada del la accion del Production Action
    const agregarProducto = () => dispatch(crearNuevoProductoAction())

    const submitNuevoProducto = e => {
        e.preventDefault()
        // Validar formualrio 
        if( nombre.trim() === '' || precio.trim() <= 0 ){
            
        }
        // Si no hay errores
        // Crear el nuevo producto
        agregarProducto()
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form onSubmit={submitNuevoProducto} autocomplete="off">
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}                                    
                                    className="form-control" 
                                    placeholder="Nombre Producto"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input 
                                    type="number" 
                                    name="precio" 
                                    value={precio}
                                    onChange={ e => setPrecio(Number(e.target.value))}
                                    className="form-control" 
                                    placeholder="Precio Producto"/>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
