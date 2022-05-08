import React from 'react'
import './Menu.css'

export default function Menu({opencredits, playgame}) {
  return (
    <div className='menur'>
      <div className='menucontainer'>
        <h1>Twitt🤬r</h1>
        <div className="buttons">
            <button className="buttonm" onClick={playgame}>Jugar</button>
            <button className="buttonm" onClick={opencredits}>Créditos</button>
            <a href="https://github.com/pablordgez" target={"_blank"}><button className='buttonm'>Código</button></a>
        </div>
      </div>
    </div>
  )
}
