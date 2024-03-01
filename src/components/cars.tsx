import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cars() {

    const [cars, setCars] = useState([
        {
            id: 1,
            brand: 'Porsche',
            model: 'Boxster 718',
            year: 2016,
            imgUrl: require('../assets/cars/porsch.png'),
            url: '',
            isFavorite: true,
        },
        {
            id: 2,
            brand: 'Mazda',
            model: '6',
            year: 2014,
            imgUrl: require('../assets/cars/mazda-about1.png'),
            url: '',
            isFavorite: false,
        },
        {
            id: 3,
            brand: 'Porsche',
            model: '911 GT3',
            year: 2016,
            imgUrl: require('../assets/cars/porsh.png'),
            url: '',
            isFavorite: false,
        },
        {
            id: 4,
            brand: 'Ford Mustang',
            model: 'Hennessey',
            year: 2015,
            imgUrl: require('../assets/cars/mustang.png'),
            url: '',
            isFavorite: false,
        },
    ])

    function setFavorite(index: number) {
        [...cars][index].isFavorite = ![...cars][index].isFavorite
        setCars([...cars])
    }

    const navigate = useNavigate();
    function handleShow(index: number) {
        navigate(`main/car/${index}`)
    }

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
            setCars(response.Results);
        });
    }, [])

    return <div id="cars" className="mt-5 pt-5" >
        <div className="mt-5 pt-4">
            <h1 className="mb-4" style={{ fontSize: '55px', textAlign: 'center' }}> Cars</h1>
            <div className="row">
                {
                    cars.map((dt: any, key: number) => {
                        return (
                            <div key={key} className="col-lg-4 mt-3 car-item-con">
                                <div className="car-item">
                                    <div className="favorites-con">
                                        {dt.isFavorite ? <i onClick={() => setFavorite(key)} className="fa-solid fa-heart"></i> : <i onClick={() => setFavorite(key)} className="fa-regular fa-heart"></i>}
                                    </div>
                                    <div className="car-item-img ">
                                        <img className="col-lg-12" src={dt.imgUrl} alt="" />
                                    </div>
                                    <div className="row car-item-desc p-3">
                                        <ul className="ps-2 col-md-7">
                                            <li>
                                                <span className="me-2 ">
                                                    Brand:
                                                </span>
                                                {dt.Mfr_CommonName}
                                            </li>
                                            <li>
                                                <span className="me-2 ">
                                                    Model:
                                                </span>
                                                {dt.Mfr_Name}
                                            </li>
                                            <li> 
                                                <span className="me-2 ">
                                                    Country:
                                                </span>
                                                {dt.Country}
                                            </li>
                                        </ul>
                                        <div className="col-md-5 car-item-buttons">
                                            <button onClick={() => handleShow(dt.Mfr_ID)} className="show-btn"><i style={{ fontSize: '13px' }} className="me-1 fa-regular fa-up-right-from-square"></i> Show more</button>
                                            {/* <button className="buy-btn"> <i style={{ fontSize: '13px' }} className="me-2 fa-duotone fa-cart-shopping"></i>Buy now</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
}