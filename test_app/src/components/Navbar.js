import React, {useState, useLayoutEffect} from 'react';
import logo from '../img/RYBALOGO_1.png';
import { NavItems } from '../constants/index';
import './navbar.css';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useLayoutEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return <nav>
        <ul className='navbar-main'>
            <li className='navbar-logo'><img src={logo} alt='logo' /></li>
            <li className='navbar-toggle' onClick = {handleClick}>
            <i className={active ? 'fas fa-times':'fas fa-bars'}></i></li>
            <ul className={active ? 'nav-menu-active': 'nav-menu'}>
            {NavItems.map((item, index) => {
               return (<li
               className='navbar-item'
               key={index}
               onClick={width < breakpoint ? handleClick : null }>
               <a className='nav-link' href={item.url}>{item.title}</a></li>)
            })}
            </ul>
        </ul>
    </nav>
}
export default Navbar;