import { useEffect, useState } from "react";
import logo from '../assets/porsh.png'
import { Link } from "react-router-dom";
import Navbar from "../layout/navbar";
import './login.css'

export default function Login() {
    const [indexTab, setIndexTab] = useState(1);

    useEffect(() => {
        handleClickTab(1);
        setIndexTab(1)
    }, []);

    function handleClickTab(tabIndex: number) {
        setIndexTab(tabIndex);
        if (tabIndex == 1) {
            document.getElementById('contentTabs')!.scrollTo({
                top: 0,
                left: -620,
                behavior: "smooth",
            });
        }
        else if (tabIndex == 2) {
            document.getElementById('contentTabs')!.scrollTo({
                top: 0,
                left: 620,
                behavior: "smooth",
            });
        }
    }

    return <div className=" relative ">
        <Navbar />

        <div className="main-content image-con-bg">
            <div className="row h-full login">
                <div className="col-sm-6 row relative d-flex align-items-center justify-content-center">
                    <div className="col-md-9">

                        <div className="rounded-lg bg-white" style={{ position: 'relative', boxShadow: 'rgb(156 156 156 / 20%) 0px 2px 20px 0px' }}>
                            <div className="" style={{ height: '80%' }}>
                                <div className="row mb-3 col-lg-12" style={{ boxShadow: '0 4px 20px #95959526', height: '50px' }}>
                                    {
                                        indexTab == 1 ?
                                            <button className="col-lg-12 tab-header text-lg font-semibold tracking-wider">
                                                {/* <i className="me-2 fa-regular text-white text-lg font-semibold fa-right-to-bracket"></i> */}
                                                Login
                                            </button>
                                            :
                                            <button className="col-lg-12 tab-header text-lg font-semibold tracking-wider">
                                                <i className="me-2 fa-regular text-white text-lg font-semibold fa-regular fa-user"></i>
                                                Sign up
                                            </button>
                                    }
                                </div>

                                <div id='contentTabs' className="px-2 pt-2 contentTabs d-flex flex-row" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
                                    <div id='tabIndex1' className=' col-sm-12 me-4' style={{ width: '100%' }} >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="field m-0 d-flex justify-content-center">
                                                    <img src={require('../assets/footer-logo.jpg')} alt="" style={{ width: '100px' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="field">
                                                    <label htmlFor="usernameLogin" title="Username" data-title="Username"></label>
                                                    <input type="text" placeholder='Username' name='usernameLogin' id='usernameLogin' />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt-2">
                                                <div className="field">
                                                    <label htmlFor="passwordLogin" title="Password" data-title="Password"></label>
                                                    <input type="password" placeholder='Password' name='passwordLogin' id='passwordLogin' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id='tabIndex2' className=' col-sm-12' style={{ width: '100%' }}>
                                        <div className="row p-0">
                                            <div className="col-lg-6">
                                                <div className="field">
                                                    <label htmlFor="name" title="Name" data-title="Name"></label>
                                                    <input type="text" name='name' placeholder='Name' id='name' />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="field">
                                                    <label htmlFor="surname" title="Surname" data-title="Surname"></label>
                                                    <input type="text" name='surname' placeholder='Surname' id='surname' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2 p-0">
                                            <div className="col-lg-6">
                                                <div className="field">
                                                    <label htmlFor="email" title="Email" data-title="Email"></label>
                                                    <input type="email" name='email' placeholder='Email' id='email' />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="field">
                                                    <label htmlFor="username" title="Username" data-title="Username"></label>
                                                    <input type="text" name='username' placeholder='Username' id='username' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-2 p-0">
                                            <div className="col-lg-6">
                                                <div className="field">
                                                    <label htmlFor="password" title="Password" data-title="Password"></label>
                                                    <input type="password" name='password' placeholder='Password' id='password' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" login-con row py-2 col-sm-12">
                                <div className="col-sm-12">
                                    <div className="field px-2 mt-2 mb-2">
                                        <button className='login-button col-sm-12'>
                                            Login
                                        </button>
                                    </div>

                                    {
                                        indexTab == 1 ?
                                            <p className="text-center text-sm" >
                                                Don't have an accound? <Link to='' style={{ color: '#00bd58' }} onClick={() => handleClickTab(2)}> Sign up</Link>
                                            </p>
                                            :
                                            <p className="text-center text-sm">
                                                Already have accound?
                                                <Link to='' style={{ color: '#00bd58' }} onClick={() => handleClickTab(1)}> Login</Link>
                                            </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 align-items-center d-flex p-0 relative">
                    <div className="px-4">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}