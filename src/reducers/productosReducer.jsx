// Cada reducer tiene su propio state

const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function( state = initialState, action){
    switch (action.type) {
        // Descricion de lo que va a pasar al state de productos
        // case value:
            
        //     break;
    
        default:
            return state
    }
}
