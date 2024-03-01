import axios from 'axios';
import car from '../assets/cars/mazda-about1.png'
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const CartContext = createContext<any>([]);

export default function CarItem() {
    const [carItem, setCarItem] = useState<any>({});
    const params = useParams();
    const { data, setData } = useContext(CartContext);
    let location = useLocation();

    useEffect(() => {
        let data = axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
            });

        data.then((response: any) => {
            response.Results.map((dt: any, key: number) => {
                dt.isFavorite = false;
                key === 0 ? dt.imgUrl = require('../assets/cars/porsch.png') :
                    (key === 1 ? dt.imgUrl = require('../assets/cars/mazda-about1.png') :
                        (
                            key === 2 ? dt.imgUrl = require('../assets/cars/porsh.png') : dt.imgUrl = require('../assets/cars/mustang.png')
                        ))
            })

            let fltr = [...response.Results].filter((dt: any) => { return Number(dt.Mfr_ID) === Number(params.id) })
            setCarItem(fltr[0]);
        });
    }, [location])

    function handleBuy() {
        setData([...data, carItem]);
        localStorage.setItem('cartCount', String(data.length + 1))
    }

    return <div className="row py-4" style={{ height: '100%' }}>
        <div className="row ">
            <div className="col-lg-6 d-flex align-items-center img-con-car-item" >
                <div className="car-img col-sm-11 p-5 border" style={{ height: '90%' }}>
                    <img src={carItem.imgUrl} alt="" className='col-sm-11' />
                </div>
            </div>
            <div className=" col-lg-6 d-flex align-items-center">
                <div className="" style={{ height: '90%' }}>
                    <h1>{carItem.Mfr_CommonName} </h1>
                    <div className="fs-4">
                        <span className='price me-2' style={{ textDecoration: 'line-through', color: '#999999' }}>16.000 $</span>   <span style={{ color: 'rgb(255 145 56)' }} className='price'>15.000 $</span>
                    </div>
                    <h5 className='mt-5'>Vehicle information</h5>
                    <ul className='main-car-item car-item-desc row'>
                        <li className='col-md-3 mt-2'>
                            <span>Brand:</span> {carItem.Mfr_Name}
                        </li>
                        <li className='col-md-3 mt-2'>
                            <span>Year:</span> 2015
                        </li>
                        <li className='col-md-3 mt-2'>
                            <span>Engine:</span> 6
                        </li>
                        <li className='col-md-3 mt-2'>
                            <span>Milage:</span> 15000
                        </li>
                        <li className='col-md-3 mt-2'>
                            <span>Fuel type:</span> Diesel
                        </li>
                        <li className='col-md-4 mt-2'>
                            <span>Country:</span> {carItem.Country}
                        </li>
                    </ul>

                    <div className='mt-2 main-car-item car-item-desc'>
                        <span className='p-0'>Vehicle types:</span>
                        {
                            carItem.VehicleTypes?.map((dt: any, key: number) => {
                                return <span key={key} className={dt.IsPrimary ? 'vehicle-types vehicleTypes-true' : 'vehicle-types vehicleTypes-false'}> {dt.Name} </span>
                            })
                        }
                    </div>

                    <h5 className='mt-4'>Features</h5>
                    <ul className='car-item-desc main-car-item row'>
                        <li className='col-md-6 '>
                            <span>Convenience:</span> Adaptive Cruise Control, Heated Seats, Heated Steering Wheel, Keyless Start, Navigation System, Power Liftgate
                        </li>
                        <li className='col-md-6 mt-2'>
                            <span>Entertainment:</span> Bluetooth®, Premium Sound System
                        </li>
                        <li className='col-md-6 mt-2'>
                            <span>Exterior:</span> Alloy Wheels
                        </li>
                        <li className='col-md-6 mt-2'>
                            <span>Safety:</span> Backup Camera, Brake Assist, Lane Departure Warning, Stability Control
                        </li>
                    </ul>
                    <div className="mt-5 row justify-content-end car-item-buttons">
                        <div className="col-sm-4">
                            <button onClick={() => handleBuy()} className="buy-btn"> <i style={{ fontSize: '13px' }} className="me-2 fa-duotone fa-cart-shopping"></i>Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}