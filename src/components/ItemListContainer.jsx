import '../styles/components/ItemListContainer.css'
import { useState,useEffect } from 'react';

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
  return (
    <div>
      {
        data.map(item=>item.name)
      }
    </div>
  )
}

export default ItemListContainer