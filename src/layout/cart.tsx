import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/car-item";
import { Link, useNavigate } from "react-router-dom";


export default function Cart({ data, id, deleteCartItem }: any) {
    const navigate = useNavigate();

    return <li className="py-2 d-flex align-items-center cart-item">
        <div className="col-sm-3 p-1 border cart-item-img  mx-2 text-center">
            <img src={data.imgUrl} alt="" />
        </div>
        <div className="col-sm-7 d-flex flex-column">
            <div className='me-3 item-header row' >
                <span>
                    <span className='text-orange'> Brand:</span>  {data.Mfr_CommonName}
                </span>
                <span>
                    <span className='text-orange'> Model:</span> {data.Mfr_Name}
                </span>
            </div>
            <div className='mt-2 row' style={{ fontSize: '15px' }}>
                <span>
                    <span className='text-orange'> Year:</span> 2015
                    <span className='text-orange ms-2'> Price:</span> 20 300 $
                </span>
            </div>
        </div> 

        <div className="text-danger d-flex flex-column justify-content-center col-sm-1 delete-btn">
           <Link to={`main/car/${data.Mfr_ID}`}> <i role="button" style={{ color: '#00bd58' }} className="fa-solid fa-up-right-from-square"></i></Link>
            <i role="button" style={{ color: '#fd5656' }} onClick={() => deleteCartItem(id)} className="mt-2 fa-solid fa-trash-can"></i>
        </div>
    </li>
}