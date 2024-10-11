import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path = '/category/:id' element = {<ItemListContainer />} />
        <Route exact path = '/item/:id' element = {<ItemDetailContainer />} />
      </Routes> 
    </div>
    </BrowserRouter>
  )
}

export default App
