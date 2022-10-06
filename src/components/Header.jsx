import React, { useState, useContext } from "react";
import '@styles/Header.scss';
import Menu from '@components/Menu.jsx';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';


const Header = () => {

    const [toggle, setToggle] = useState(false);

    const [toggleOrders, setToggleOrders] = useState(false);

    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <header>
             <nav>
                <div className="navbar-left">
                <img src={logo} alt="logo" className="header-logo"/>

                <ul>
                    <li>
                    <a href="/">All</a>
                    </li>
                    <li>
                    <a href="/">Clothes</a>
                    </li>
                    <li>
                    <a href="/">Electronics</a>
                    </li>
                    <li>
                    <a href="/">Furnitures</a>
                    </li>
                    <li>
                    <a href="/">Toys</a>
                    </li>
                    <li>
                    <a href="/">Others</a>
                    </li>
                </ul>
                </div>

                <div className="navbar-right">
                <ul>
                    <li className="navbar-email">
                        platzi@example.com
                    </li>
                    <img src={menu} alt="menu" className="menu" onClick={handleToggle}/>
                    <li className="navbar-shopping-cart" 
                    onClick = {() => setToggleOrders(!toggleOrders)}>
                        <img src={shoppingCart} alt="shopping cart"/>
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
                </div>
                {toggle && <Menu />}
                {toggleOrders && <MyOrder />}
            </nav>
        </header>
    );
}

export default Header;