import { Link, Outlet } from "react-router-dom";
import './main.css'

function Main({ cartCount }: any) {

    const handleOpenCart = () => {
        document.getElementById('cart')!.classList.remove('close-sidenav');
        document.getElementById('cart')!.classList.add('open-sidenav');
    }

    return (
        <div className="" style={{ position: 'relative' }}>
            <div className="nav-con-main py-1 align-items-center row justify-content-between">
                <div className="col-md-4 ">
                    <ul className="row col-lg-12 nav-container">
                        <li className="text-center col-sm-4">
                            <Link to={'/'}>
                                <i style={{ color: '#fc623e' }} className="me-2 fa-duotone fa-house"></i>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='pe-5' onClick={() => handleOpenCart()} style={{ width: '50px', cursor: 'pointer', fontSize: '22px', position: 'relative' }}>
                    <i style={{ color: '#fc623e' }} className="fa-duotone fa-cart-shopping"></i>
                    <span className='cartCount'>
                        {cartCount}
                    </span>
                </div>
            </div>
            <div className="p-5 main-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Main;