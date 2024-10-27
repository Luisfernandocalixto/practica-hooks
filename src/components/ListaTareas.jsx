import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [{
    id: new Date().getTime(),
    tarea: 'Explicar Reducers',
    finalizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'Explicar useReducers',
    finalizada: false
}



const tareaReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Finalizar Tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                } return tarea
            })
        case '[TAREAS] Eliminar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
        case '[TAREAS] Borrar Tareas':
            return []
        default:
            return state;
    }
}



export const ListaTareas = () => {


    const { tarea, formState, onInputChange } = useForm({ tarea: '' })

    const [state, dispatch] = useReducer(tareaReducer, initialState)



    const agregarTarea = (event) => {
        event.preventDefault();
        if (formState.tarea == '') return
        console.log(formState);
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        console.log(tarea);
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: tarea
        }
        dispatch(action)
    }

    const finalizarTarea = ({ id }) => {
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id

        }
        dispatch(action)
    }

    const eliminarTarea = ({ id }) => {
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id

        }
        dispatch(action)

    }

    const reset = () => {
        const action = {
            type: '[TAREAS] Borrar Tareas',
            payload: ''
        }
        dispatch(action)
    }


    return (
        <>
            <h1>Lista de tareas</h1>

            <form action="" onSubmit={agregarTarea}>

                <div action="" className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="tarea"
                        name="tarea"
                        placeholder="Ingrese tarea"

                        value={tarea}
                        onChange={onInputChange}

                    />
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
                <button type="button" className="btn btn-danger" onClick={reset}>Reset </button>

            </form>

            <hr />

            <ul className="list-group">
                {state.map(item => {
                    return (
                        <li className="list-group-item d-flex justify-content-between"
                            key={item.id}>
                            <span> {item.tarea} </span>
                            <div>
                                <input type="checkbox" name="" id=""
                                    value={item.finalizada}
                                    onClick={() => finalizarTarea(item)}
                                />
                                <button className="btn btn-danger"
                                    onClick={() => eliminarTarea(item)}
                                >Borrar</button>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}
