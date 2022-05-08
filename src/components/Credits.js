import React from 'react'
import './Credits.css'

export default function Credits({closecredits}) {
  return (
    <div>
        <div className='darken'>
            <div className='popup'>
                <p>David Estébanez Menéndez - Guión de todo lo que proviene de la primera y cuarta opción inicial, vídeos</p>
                <p>Manuel Álvarez Suárez - Guión de todo lo que proviene de la segunda y tercera opción inicial</p>
                <p>Pablo Rodríguez García - Diseño y programación del juego</p>
                <p>Iconos - Font Awesome {"(Créditos dados debidamente en el código)"}</p>
                <p>Diseño propio, creado por Pablo desde cero, inspirado en Twitter</p>
                <p>Tweet de la cuenta de Twitter borrada de Marc Seguí</p>
                <p>Fotos de perfil tienen licencia creative commons</p>
                <div className="buttons">
                    <button className='buttonm' onClick={closecredits}>Cerrar</button>
                </div>
            </div>
        </div>
    </div>
  )
}
