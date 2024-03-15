import axios from 'axios';
import car from '../assets/cars/mazda-about1.png'
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';

export const CartContext = createContext<any>([]);

export default function CarItem() {
    const [carItem, setCarItem] = useState<any>({});
    const [carItemVariants, setCarItemVariants] = useState<any>([]);
    const [carImage, setCarImage] = useState<any>('');
    const [prevId, setPrevId] = useState(0);
    const params = useParams();
    const { data, setData } = useContext(CartContext);
    let location = useLocation();

    // const [imageProps, setImageProps] = useState({});
    const imageProps = {
        smallImage: {
            alt: 'car',
            isFluidWidth: true,
            src: carImage, 
            width: 380,
            height: 480,
        },
        largeImage: {
            src: carImage,
            width: 600,
            height: 600,
            
        },
        enlargedImageContainerStyle: { background: '#fff', zIndex: 9, width: '100%', height: '100%' },
    };


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

            let arr: any[] = [];
            [...response.Results].map((dt: any, key: number) => key < 4 ? arr.push(dt) : null)
            setCarItemVariants(arr);

            let fltr = [...response.Results].filter((dt: any) => { return Number(dt.Mfr_ID) === Number(params.id) })
            setCarImage(fltr[0].imgUrl);
            setCarItem(fltr[0]);
            setPrevId(fltr[0].Mfr_ID);
        });
    }, [location])

    function handleBuy() {
        setData([...data, carItem]);
        localStorage.setItem('cartCount', String(data.length + 1))
    }

    function handleOpenVariant(htmlId: number, imgUrl: string) {
        setPrevId(htmlId);
        setCarImage(imgUrl);
        if (prevId && prevId != htmlId) {
            document.getElementById(`${prevId}`)!.style.boxShadow = "none";
            document.getElementById(`${htmlId}`)!.style.boxShadow = "rgb(0 0 0 / 53%) 0px 2px 11px";
        }
        else document.getElementById(`${htmlId}`)!.style.boxShadow = "rgb(0 0 0 / 53%) 0px 2px 11px";
    }

    return <div className="row" >
        <div className="row ">
            <div className=" col-lg-5 px-2 mt-3 d-flex align-items-center " >
                <div className="car-img relative h-full col-sm-12 p-4 rounded-lg main-car-item-overflow" style={{ boxShadow: '0 4px 20px #95959526', border: '1px solid rgb(255 181 121)' }}>
                    <div className="row">
                        <button className='w-fit py-1 px-2 rounded ' style={{ width: 'fit-content', backgroundColor: 'rgb(255 145 56)' }}>
                            <i className="text-xl text-white fa-light fa-share-nodes"></i>
                        </button>
                    </div>
                    <div className="d-flex align-items-center h-3/4 max-h-3/4">
                        {/* <img src={carImage} alt="" /> */}
                        <ReactImageMagnify {...imageProps} />
                    </div>
                    <div className='absolute left-0 bottom-5 px-3 row m-0 p-0'>
                        {
                            carItemVariants.map((dt: any, key: number) => {
                                return <div key={key} className="col-sm-3">
                                    <div role='button' id={dt.Mfr_ID} onClick={() => handleOpenVariant(dt.Mfr_ID, dt.imgUrl)} className="px-2 py-3 d-flex align-items-center rounded max-version-car-width" style={{ border: '1px solid rgb(255 145 56)', height: '80px' }}>
                                        <img src={dt.imgUrl} alt="" />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="col-lg-7 px-2 mt-3 row  " >
                <div className="rounded-lg p-4 h-full main-car-item-overflow" style={{ boxShadow: '0 4px 20px #95959526', border: '1px solid rgb(255 181 121)' }} >
                    <h1>{carItem.Mfr_CommonName} </h1>
                    <div className="fs-5">
                        <span className='price me-2' style={{ textDecoration: 'line-through', color: '#999999' }}>16.000 $</span>   <span style={{ color: 'rgb(255 145 56)' }} className='price'>15.000 $</span>
                    </div>
                    <h5 className='mt-4'>Vehicle information</h5>
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