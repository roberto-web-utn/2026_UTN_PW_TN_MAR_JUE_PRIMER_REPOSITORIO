import { useState } from "react"



export default function Messages (){
    const [messages, setMessages] = useState([])

    const [form, setForm] = useState ({content: ''});

    // Expresión regular que prohíbe la palabra Voldermort (case-insensitive)
    const regexValida = /^(?!.*[Vv]oldermort).*$/

    const palabra_prohibida = 'Voldermort'




    function manejarCambioInput(evento) {
        const campo = evento.target
        const nombre_campo = campo.name
        const valor_campo = campo.value

        //Clonamos el estado para no violar la regla de inmutabilidad de los estados
        const cloneForm = { ...form }

        //Modificamos cierto campo del estado clonado (puede ser "price" o "title")
        cloneForm[nombre_campo] = valor_campo

        //Guardamos el estado clonado como nuevo valor de estado de formulario
        setForm(cloneForm)
    }


    

    function manejarAltaDeMensajes (evento){
        evento.preventDefault ()
        const clonedMessages = [...messages]
        clonedMessages.push ({
            content: form.content,
            id: messages.length + 1

        })
        setMessages(clonedMessages)

        setForm({ content: '' });

    }

    let messages_jsx=[]
    for (let message of messages) {
    messages_jsx.push(
        <div key={message.id}>
            <h3>{message.content}</h3> {/* <-- Usamos message.content y agregamos el key */}
        </div>
    );
    }
    

    return (
        <div>
            <h2>Formulario de mensajes: </h2>
            <form onSubmit={manejarAltaDeMensajes}>
                <div>
                    <label htmlFor="content">Contenido del mensaje:</label>
                    <textarea id="content" name="content" value= {form.content} onChange = {manejarCambioInput}></textarea> 
                </div>
                <button disabled={form.content.toLowerCase().includes(palabra_prohibida.toLowerCase())}>Enviar mensaje</button>
            </form>

            <h2>Messages</h2>
            <div>
                <ul>
                {
                    !regexValida.test(form.content) && <li> No puedes escribir la palabra: {palabra_prohibida} </li>
                }
                {
                    messages.length === 0
                    ? <li><span>Aun no hay mensajes</span> </li> 
                    : <div>
                        lista de mensajes
                        
                                <h3>{messages_jsx}</h3>
                    </div>
                 
                }
                </ul>
            </div>
        </div>
    )
}




