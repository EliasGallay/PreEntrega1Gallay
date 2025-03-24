import './App.css'
import ButtonCart from './assets/components/ButtonCart/ButtonCart'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import NavBar from './assets/components/NavBar/NavBar'

function App() {

 const greeting = 'Bienvenidos a la tienda'

  return (
    <>
      <NavBar />
      <ItemListContainer greeting = { greeting }/>
    </>
  ) 
}

export default App
