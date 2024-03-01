import { Link } from 'react-scroll';
import Cart from './cart';
import { createContext, useState } from 'react';

export const CartCountContext = createContext<any>(0);

export default function Navbar({ cartCount }: any) {
    let navArray = [
        {
            id: 0,
            name: 'Home',
            url: '/',
            htmlId: 'home',
            icon: 'fa-duotone fa-house'
        },
        {
            id: 1,
            name: 'About',
            url: '/',
            htmlId: 'about',
            icon: 'fa-duotone fa-bars'
        },
        {
            id: 2,
            name: 'Cars',
            url: '/',
            htmlId: 'cars',
            icon: 'fa-duotone fa-car'
        },
    ];

    const handleOpenCart = () => {
        document.getElementById('cart')!.classList.remove('close-sidenav');
        document.getElementById('cart')!.classList.add('open-sidenav');
    }

    return <div className="nav-con py-1 align-items-center row" id='navbar'>
        <div className="col-md-4 mx-auto">
            <ul className="row col-lg-12 nav-container justify-content-center">
                {
                    navArray.map((dt: any, key: number) => {
                        return <li key={key} id={`${key}`} className="text-center col-sm-4">
                            {/* <a href={`#${dt.htmlId}`}>
                                <i id={`icon${key}`} style={{ color: 'rgb(255, 145, 56)' }} className={`me-2 ${dt.icon}`}></i>
                                {dt.name} - {dt.htmlId}
                            </a> */}

                            <a onClick={() => {document.getElementById(`${dt.htmlId}`)!.scrollIntoView();} }>
                                <i id={`icon${key}`} style={{ color: '#fc623e' }} className={`me-2 ${dt.icon}`}></i>
                                {dt.name}
                            </a>
                        </li>
                    })
                }
            </ul>
        </div>
        <div className="nav-bar-bottom" id='nav-bar-bottom'>

        </div>
        <div className='pe-5 me-2' onClick={() => handleOpenCart()} style={{ width: '50px', cursor: 'pointer', fontSize: '22px', position: 'relative' }}>
            <i style={{ color: '#fc623e' }} className="fa-duotone fa-cart-shopping"></i>
            <span className='cartCount'>
                {cartCount}
            </span>
        </div>

    </div>
}