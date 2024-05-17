
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export function Contacto() {
    const refForm = useRef<HTMLFormElement>(null);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(refForm.current);
        const serviceID = "service_px5iv9z";
        const templateID = "template_vk0hxfl";
        const apiKey = "HLOvIi2GtVsevTtry"; 

        emailjs.sendForm(serviceID, templateID, refForm.current, apiKey)
            .then(result => {
                console.log(result.text);
                // Limpiar el formulario después del envío exitoso
                refForm.current.reset();
                setSubmitted(true);
            })
            .catch(error => console.error(error));
    };

    return (
        <form ref={refForm} onSubmit={handleSubmit}>
            <div className='header-contact'>
                <h2>Contáctanos</h2>
                <p>Por favor llene este formulario</p>
            </div>
            <fieldset className='field-name'>
                <label className='symbol-required' htmlFor="username">Nombre Completo</label>
                <input name='username' type="text" placeholder='Ej: Placido Domingo' required />
            </fieldset>

            <fieldset className='field-email'>
                <label className='symbol-required' htmlFor="email">Correo</label>
                <input name='email' id='email' type='email' placeholder='Ej: placido@placido.com' required />
            </fieldset>

            <fieldset className='field-message'>
                <label className='symbol-required'>Comentarios</label>
                <textarea maxLength="500" placeholder="Ingrese su Mensaje" name="message" cols="30" rows='5' required></textarea>
            </fieldset>

            <button className='btn-send' disabled={submitted}>Enviar</button>
            {submitted && <p>¡Formulario enviado con éxito!</p>}

        </form>
   
    );
}
