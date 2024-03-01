import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import CarItem, { CartContext } from './components/car-item';
import Navbar, { CartCountContext } from './layout/navbar';
import Main from './layout/main';
import Cart from './layout/cart';


function App() {
  const [data, setData] = useState([]);

  const handleOpenCart = () => {
    document.getElementById('cart')!.classList.add('close-sidenav');
    document.getElementById('cart')!.classList.remove('open-sidenav')
  }

  const [count, setCount] = useState(0);
  const updateCount = (count: number) => {
    setCount(count)
  }

  function deleteCartItem(index: number) {
    setData([...data].filter((dt: any, key: number) => key != index));
  }

  return (
    <CartContext.Provider value={{ data, setData }}>
      <CartCountContext.Provider value={0}>
        <div style={{ position: 'relative', overflowX: 'hidden', overflowY: 'auto', height: '100vh' }}>
          <div id="cart" className="p-0 bg-white cart-con ">
            <div className="d-flex justify-content-between align-items-center p-2" style={{ borderBottom: '1px solid #dedede', height: '8vh' }}>
              <span className="close-btn-cart" onClick={() => handleOpenCart()}>
                <i className="fa-solid fa-xmark"></i>
              </span>
              {data.length ?
                <span className='px-2' style={{ color: 'rgb(95 95 95)', fontWeight: '500' }}> <span className='me-1' style={{color: '#fd5656'}}>Cart:</span> {data.length} item.</span>
                :
                null
              }
            </div>

            <ul className={data.length ? "mt-3" : 'mt-3 d-flex align-items-center justify-content-center'} style={{ height: '89.8vh', overflowY: 'auto' }}>
              {data.length ?
                data.map((dt: any, key: number) => {
                  return <Cart key={key} data={dt} id={key} deleteCartItem={deleteCartItem} />
                })
                : <div style={{ fontSize: '20px' }}>No item yet...</div>
              }
            </ul>
          </div>

          <div style={{ position: 'relative', overflowX: 'hidden', overflowY: 'auto', height: '100vh' }}>
            <Routes >
              <Route path='/' element={<Layout cartCount={data.length} />}></Route>
              <Route path='/main' element={<Main cartCount={data.length} />}>
                <Route path='car/:id' element={<CarItem />}></Route>
              </Route>
            </Routes>
          </div>
        </div>
      </CartCountContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
