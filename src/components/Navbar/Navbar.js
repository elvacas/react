import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Element from '../Element/Element'


const Navbar = () => {
    return(
<nav className= 'navegacion'>
    <Element nombre='Vestidos' colorText='white'/>
    <Element nombre='Buzos' colorText='white'/>
    <Element nombre='Pantalones' colorText='white'/>
    <CartWidget/>
    <button className='botonIngreso'>Ingreso</button>
</nav>
    )
}

export default Navbar