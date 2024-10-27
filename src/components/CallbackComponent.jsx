import { useCallback, useState } from "react"
import { Incrementar } from "./Incrementar"

export const CallbackComponent = () => {


    const [counter, setcounter] = useState(0)

    const incrementarPadre = useCallback((val) => {
        setcounter(contador => contador + val)
    }, []);



    return (
        <>
            <h1>Contador: {counter}</h1>
            <Incrementar incrementar={incrementarPadre}></Incrementar>

        </>
    )
}
