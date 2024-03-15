import { useEffect, useState } from 'react';
import logo from '../assets/bg-car3.png'
import porsch from '../assets/porsh.png'
import { Link } from 'react-router-dom';

export default function Header() {

    return <div id='home' style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%'
    }}>
        <div className="header-content py-4 px-4 rounded-lg">
            <div className="px-2">
                <div className="text-5xl row">
                    <span className='font-medium tracking-widest'>Browse.</span>
                </div>
                <div className="mt-1 row text-5xl">
                    <span className='font-medium tracking-widest pe-0' style={{ width: 'fit-content' }}>Order.</span>
                    <span className='font-medium tracking-widest pe-0' style={{ width: 'fit-content' }}>Drive.</span>
                </div>
                <div className="mt-4  row text-xl">
                    <span className=''>Get cars with special offers.</span>
                </div> 
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <button className='col-md-7 mt-3 h-11 rounded-lg font-semibold text-white tracking-wider' style={{ backgroundColor: '#ff8530' }}>
                            <Link to={'login'} className='no-underline text-white'>
                                <i className="text-white me-2 fw-bold fa-regular fa-arrow-right-long"></i>  Login to buy
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <img className='header-porsch' src={porsch} alt="" />
    </div>
}