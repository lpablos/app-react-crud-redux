import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editarProductoAction } from '../actions/productosActions'
import { useHistory } from "react-router-dom"

const EditarProducto = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    // Objecto en blanco para el formulario
    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    })
    // El producto a editar del state
    const productoeditar = useSelector(state=> state.productos.productoeditar)
    
    // Relacionar el prodcuto a editar con el objecto definido para el formulario
    useEffect(() => {
        setProducto(productoeditar)
    }, [productoeditar])


    const onChangeFormulario = e =>{
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    const {nombre, precio} = producto

    const submitEditarProducto = e => {
        e.preventDefault()
        dispatch(editarProductoAction(producto))
        history.push("/")
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>
                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    id="" 
                                    className="form-control" 
                                    placeholder="Nombre Producto"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input 
                                    type="number" 
                                    name="precio" 
                                    id="" 
                                    className="form-control" 
                                    placeholder="Precio Producto"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
