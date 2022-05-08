import React from 'react'
import './Video.css'

export default function Video({id, closevideo}) {
  return (
    <div className='videocontainer'>
        <div className='darken'>
            <div className='popupvideo'>
                <video src={'./img/'+id+'.mp4'} type='video/mp4' controls autoPlay></video>
                <button className='buttonm' onClick={closevideo}>Cerrar</button>
            </div>
        </div>
    </div>
  )
}
