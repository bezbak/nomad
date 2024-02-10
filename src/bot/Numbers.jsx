import React from 'react'
import './css.css'


export default function Numbers() {
  return (
    <div className='numbers'>
      <h2>NOMAD PEAKS в цифрах</h2>
      <div className="numbers__flex">
        <div className="numbers__flex-items">
            <h1>5000+</h1>
            <p>Довольных клиентов по всей стране</p>
        </div>
        <div className="numbers__flex-items">
            <h1>16+</h1>
            <p>Туров в разных локациях и странах</p>
        </div>
        <div className="numbers__flex-items">
            <h1>22</h1>
            <p>Года как уже работаем с туристами</p>
        </div>
      </div>
    </div>
  )
}
