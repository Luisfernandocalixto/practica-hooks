import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {

    const inicialForm = {
        userName: '',
        email: '',
        password: ''
    }

    const { formState, userName, email, password, onInputChange } = useForm(inicialForm)

    const focusRef = useRef()
    console.log(focusRef);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    useEffect(() => {
        focusRef.current.focus();
    }, [])


    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">User name</label>
                <input

                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Ingrese su nombre"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Ingrese email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                    ref={focusRef}

                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Ingrese contraseña"
                    value={password}
                    onChange={onInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
