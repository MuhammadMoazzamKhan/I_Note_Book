import axios from "axios";
import AuthContext from "./authContext";
import { useState } from "react";

const AuthState = (props) => {
    const [success, setSuccess] = useState();
    const host = "https://i-note-book-chi.vercel.app/api/auth"
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${host}/login`, { email, password })
            localStorage.setItem("token", response.data.authToken)
            await setSuccess(response.data.success)
        } catch (error) {
            console.log(error)
        }
    }

    const createUser = async(name, email, password) => {
        const response = await axios.post(`${host}/createuser`, { name, email, password })
        setSuccess(response.data.success)
    }

    return (
        <AuthContext.Provider value={{ success, login, createUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
