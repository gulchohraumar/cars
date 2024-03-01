import logo from '../assets/footer-logo.jpg'

export default function Footer() {
    return <div className='pt-5' >
        <div className="row pt-2 px-5" style={{ borderTop: '1px solid #dedede' }}>
            <div className="col-md-7 px-5">
                <img src={logo} alt="" style={{ width: '90px' }} />
                <ul style={{ width: '110px' }} className='social d-flex justify-content-between'>
                    <li>
                        <i className="fa-regular fa-envelope"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-instagram"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-facebook"></i>
                    </li>
                </ul>
            </div>
            <div className="text-center col-md-5">
                <ul className='col-md-6 mt-4 mx-auto footer-nav d-flex justify-content-between'>
                    <li>
                        <i className='me-2 fa-duotone fa-house '></i> Home
                    </li>
                    <li>
                        <i className='me-2 fa-duotone fa-bars '></i>  About
                    </li>
                    <li>
                        <i className='me-2 fa-duotone fa-car'></i>  Cars
                    </li>
                </ul>
            </div>

            <div className="text-center pb-2">
                © 2024 All right reserved
            </div>
        </div>
    </div>
}