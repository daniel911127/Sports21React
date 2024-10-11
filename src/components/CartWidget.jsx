import {FaShoppingCart} from 'react-icons/fa'
import '../styles/components/CartWidget.css'

function CartWidget() {
  return (
    <div className='containerCart'>
      <FaShoppingCart/>
      <div className='containerCount'>
        <p className='count'>0</p>
      </div>
    </div>
  )
}

export default CartWidget