import {
    MONSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types'

export function monstrarAlertaAction(alerta){
    
    return (dispathch)=>{
        dispathch(creartAlerta(alerta))
    }
}

const creartAlerta = alerta =>({
    type: MONSTRAR_ALERTA,
    payload: alerta
})

export function ocultarAlertaAction(){
    return (dispathch)=>{
        dispathch(ocultarAlerta())
    }
}

const ocultarAlerta = () =>({
    type: OCULTAR_ALERTA
})