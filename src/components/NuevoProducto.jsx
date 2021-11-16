import React, { useState } from 'react'
// Manejadores de redux
// useDispatch -> Ejecuta las acciones
// useSelector -> Acceder al state dentro del componente
import { useDispatch, useSelector } from 'react-redux'
// Actions de redux
import  { crearNuevoProductoAction } from '../actions/productosActions'
import { monstrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions'

const NuevoProducto = ({history}) => {
    // State del componente
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    
    // Utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch()
    // Acceder al state del store Producto
    const cargando = useSelector( state => state.productos.loading)
    const error = useSelector( state => state.productos.error)
    const alerta = useSelector( state=>state.alerta.alerta )

    // Llamada del la accion del Production Action
    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto))
    

    const submitNuevoProducto = e => {
        e.preventDefault()
        // Validar formualrio 
        if( nombre.trim() === '' || precio <= 0 ){
            const respuesta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(monstrarAlertaAction(respuesta))
            return
        }
        // Si no hay errores
        dispatch(ocultarAlertaAction())
        // Crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        })
        // Redirecccionamos
        history.push('/')
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        {
                            alerta
                            ?<p className={alerta.classes}>{alerta.msg}</p>
                            :null
                        }
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
                        {
                            cargando 
                            ? <p>Cargadno</p> 
                            : false
                        }
                        {
                            error
                            ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
