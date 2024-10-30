import '../../styles/components/pages/ItemListContainer.css'
import { useState,useEffect } from 'react';
import { Card } from '../common/Card';

const mockAPI = () => {
  return new Promise ((resolve, reject) => {
      setTimeout(() => 
          resolve(fetch('/productos.json'))
      , 2000);
  })
}
function ItemListContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    mockAPI()
    .then(res => res.json())
    .then((data) => setData(data));
  }, []);
    console.log(data)
  return (
    <div className="itemListContainer">
      {
        data.map(item=>(
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            stock={item.stock}
            image={item.image}
          />
        ))
      }
    </div>
  )
}

export default ItemListContainer