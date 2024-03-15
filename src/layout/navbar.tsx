import { Link, useLocation } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

export const CartCountContext = createContext<any>(0);

export default function Navbar({ cartCount }: any) {
    let initialnavArray = [
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

    const [navArray, setNavArray] = useState([
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
    ])

    const [isLogin, setIsLogin] = useState(false)

    let location = useLocation();

    useEffect(() => {
        if (location.pathname == '/') {
            setNavArray(initialnavArray)
        }
        else if (location.pathname == '/login') {
            setNavArray([]);
            setIsLogin(true);
        }
        else {
            setNavArray([]);
        }
    }, [location])

    const handleOpenCart = () => {
        document.getElementById('cart')!.classList.remove('close-sidenav');
        document.getElementById('cart')!.classList.add('open-sidenav');
    }

    return <div className="nav-con row pb-2 pt-1  " id='navbar'>
        <div className="row h-full justify-content-between align-items-center">
            <div className="col-lg-2 h-full">
                <Link to={'/'}>
                    <img src={require('../assets/footer-logo.jpg')} alt="" className='h-full' style={{ width: '80px' }} />
                </Link>
            </div>
            <div className="col-md-4 d-flex h-full">
                <ul className="row col-lg-12 nav-container justify-content-center">
                    {
                        navArray.length ? navArray.map((dt: any, key: number) => {
                            return <li key={key} id={`${key}`} className="nav-container-li text-center col-sm-4 ">
                                <a onClick={() => { document.getElementById(`${dt.htmlId}`)!.scrollIntoView(); }}>
                                    <i id={`icon${key}`} style={{ color: '#ff8530' }} className={`me-2 ${dt.icon}`}></i>
                                    {dt.name}
                                </a>
                            </li>
                        }) : null
                    }
                </ul>
            </div>

            {
                isLogin ? null : <div className='col-md-3 h-full row me-2 align-items-center'>
                    <div className="col-sm-10">
                        <div className="field relative m-0">
                            <input type="text" className='search ps-2' placeholder='Search...' name="search" id="search" />
                            <button className='absolute right-0 top-0 d-flex align-items-center justify-content-center search-icon'>
                                <i style={{ color: '#ff8530' }} className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>

                    <div className='col-sm-2 pe-0' onClick={() => handleOpenCart()} style={{ width: '50px', cursor: 'pointer', fontSize: '22px', position: 'relative' }}>
                        <i style={{ color: '#ff8530' }} className="fa-duotone fa-cart-shopping"></i>
                        <span className='cartCount'>
                            {cartCount}
                        </span>
                    </div>
                </div>
            }

        </div>
    </div>
}