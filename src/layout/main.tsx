import { Link, Outlet } from "react-router-dom";
import './main.css'
import Navbar from "./navbar";

function Main({ cartCount }: any) {
    const handleOpenCart = () => {
        document.getElementById('cart')!.classList.remove('close-sidenav');
        document.getElementById('cart')!.classList.add('open-sidenav');
    }

    return (
        <div className="bg-main" style={{ position: 'relative' }}>
            {/* <div className="nav-con-main row justify-content-between">
                <ul className="row col-lg-3 align-items-center ps-4 nav-container justify-content-start" style={{height: '100%'}}>
                    <li className="text-lg w-fit p-0">
                        <Link to={'/'} className='no-underline w-fit justify-content-start' style={{ color: '#85848e' }}>
                            <i style={{ color: '#ff8530' }} className="me-2 fa-duotone fa-house"></i>
                            Home
                        </Link>
                    </li>
                </ul>

                <div className="col-md-3 px-3 row align-items-center ">
                    <div className='col-md-10 '>
                        <div className="field m-0 relative">
                            <input type="text" className='search ps-2' placeholder='Search...' name="search" id="search" />
                            <button className='absolute right-0 top-0 d-flex align-items-center justify-content-center search-icon'>
                                <i style={{ color: '#ff8530' }} className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>

                    <div className='col-lg-2 ' onClick={() => handleOpenCart()} style={{ width: '50px', cursor: 'pointer', fontSize: '22px', position: 'relative' }}>
                        <i style={{ color: '#ff8530' }} className="fa-duotone fa-cart-shopping"></i>
                        <span className='cartCount'>
                            {cartCount}
                        </span>
                    </div>
                </div>
            </div> */}

            {/* <div className="nav-con row pb-2 pt-1  " id='navbar'>
                <div className="row h-full justify-content-between align-items-center">
                    <div className="col-lg-2 h-full d-flex align-items-center ">
                        <Link to={'/'} className=' ps-3 nav-container-li no-underline w-fit justify-content-start' style={{ color: '#85848e' }}>
                            <i style={{ color: '#ff8530' }} className="me-2 fa-duotone fa-house"></i>
                            Home
                        </Link>
                    </div>
                    <div className='col-md-3 h-full row me-2 align-items-center'>
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
                </div>
            </div> */}

            <Navbar cartCount={cartCount} />

            <div className="p-4 main-content h-screen">
                <Outlet />
            </div>
        </div>
    );
}

export default Main;