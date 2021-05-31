import React, {useState} from 'react';
import logo from '../img/RYBALOGO_1.png';
import { NavItems } from '../constants/index';
import './navbar.css';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    return <nav>
        <ul className='navbar-main'>
            <li className='navbar-logo'><img src={logo} /></li>
            <li className='navbar-toggle' onClick={handleClick}>
            <i className={active ? 'fas fa-times':'fas fa-bars'}></i></li>
            <ul className={active ? 'nav-menu-active': 'nav-menu'}>
            {NavItems.map((item, index) => {
               return (<li className='navbar-item' href={item.url} key={index}><a className={item.Cname}>
               {item.title}</a></li>)
            })}
            </ul>
        </ul>
    </nav>
}
export default Navbar;