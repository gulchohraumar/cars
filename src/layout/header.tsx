import { useEffect, useState } from 'react';
import logo from '../assets/bg-car.png'
import porsch from '../assets/porsh.png'

export default function Header() {
    const [indexTab, setIndexTab] = useState(1);

    useEffect(() => {
        handleClickTab(1);
        setIndexTab(1)
    }, []);

    function handleClickTab(tabIndex: number) {
        setIndexTab(tabIndex);
        if (tabIndex == 1) {
            document.getElementById('login')!.classList.add('active-tab-header');
            document.getElementById('signUp')!.classList.remove('active-tab-header')
            document.getElementById('contentTabs')!.scrollTo({
                top: 0,
                left: -620,
                behavior: "smooth",
            });
        }
        else if (tabIndex == 2) {
            document.getElementById('signUp')!.classList.add('active-tab-header');
            document.getElementById('login')!.classList.remove('active-tab-header');
            document.getElementById('contentTabs')!.scrollTo({
                top: 0,
                left: 620,
                behavior: "smooth",
            });
        }
    }

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
        <div className="header-content">
            <div className="" style={{ position: 'relative', height: '100%' }}>
                <div className="" style={{ height: '80%' }}>
                    <div className="row mb-3 col-lg-12" style={{ boxShadow: '0 4px 20px #95959526', height: '50px' }}>
                        <button onClick={() => handleClickTab(1)} id='login' className="col-lg-6 tab-header ">Login</button>
                        <button onClick={() => handleClickTab(2)} id="signUp" className="col-lg-6 tab-header ">Sign up</button>
                    </div>

                    <div id='contentTabs' className="contentTabs px-3 d-flex flex-row" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
                        <div id='tabIndex1' className=' col-sm-12 me-4' style={{ width: '100%' }} >
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="field m-0 text-center">
                                        <img src={require('../assets/footer-logo.jpg')} alt="" style={{ width: '120px' }} />
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
                                <div className="col-lg-12">
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
                            <div className="row p-0">
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

                            <div className="row p-0">
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

                <div className="login-con row py-1 col-sm-12">
                    <div className="col-sm-12">
                        <div className="field px-1 mt-2 mb-3">
                            <button className='login-button col-sm-12'>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <img className='header-porsch' src={porsch} alt="" />
    </div>
}