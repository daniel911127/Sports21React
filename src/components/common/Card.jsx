import React from 'react'
import '../../styles/components/common/Card.css'
import { NavLink } from 'react-router-dom'

export const Card = ({id, name, price, stock,image }) => {
    console.log(id,name,price,stock,image)
    return (
      <div className='cardItem'>
        <h2>{name}</h2>
        <h3>Precio: {price}</h3>
        <h3>Stock: {stock}</h3>
        <img src={image} alt="" /> 
        <div className='cardButtons'>
            <button className='buttonAgregar'>Agregar al carrito</button>
            <button className='buttonDetalle'>
                <NavLink to={`/item/${id}`} >
                    Ver detalle
                </NavLink>
            </button>
            
        </div>
      </div>
    );
  };