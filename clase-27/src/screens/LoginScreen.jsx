import React, { useContext } from 'react'
import Navbar from '../componentes/navbar/Navbar'
import { ContactContext } from '../context/ContactContext'

export default function LoginScreen() {

    //Usar/Consumiendo el contexto
    const result = useContext(ContactContext)

    console.log(result.contacts)
    return (
        <div>
            <Navbar/>
            <h1>Iniciar sesion</h1>
        </div>
    )
}

