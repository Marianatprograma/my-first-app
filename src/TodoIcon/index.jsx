import React from 'react';
import './TodoIcon.css';

function TodoIcon({Icolor}) {
  return (
    <>
        <p className={`Icono-${Icolor}`}>X</p>
    </>
  )
}

export {TodoIcon}