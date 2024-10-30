import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../styles/components/pages/ItemDetailContainer.css'; 

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`/productos.json`)
      .then(res => res.json())
      .then(data => {
        const selectedItem = data.find(item => item.id === parseInt(id));
        setItem(selectedItem);
      });
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='itemDetailContainer'>
      <h2>{item.name}</h2>
      <h3>Precio: {item.price}</h3>
      <h3>Stock: {item.stock}</h3>
      <img src={item.image} alt={item.name} />
    </div>
  );
}

export default ItemDetailContainer;