import React from 'react';
import {  FaHeart, FaMinus, FaMinusCircle, FaPlus, FaPlusCircle } from "react-icons/fa";
const BigCard = ({product}) => {
    // console.log(product)
    const{name, order, picture,price,ratting,review,_id} = product;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{ratting} <span>{review.length} reviews</span></p>
            <p>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
            <p>{price}</p>
            <div className='flex justify-between'>
                <div>
                    <ul className='flex text-left'>Color :
                        <li className='h-5 w-5 rounded-lg bg-green-500 ml-3'></li>
                        <li className='h-5 w-5 rounded-lg bg-green-500 mx-3'></li>
                        <li className='h-5 w-5 rounded-lg bg-green-500 mr-3'></li>
                        <li className='h-5 w-5 rounded-lg bg-green-500'></li>
                        
                    </ul>
                </div>
                <div className='flex justify-around align-center bg-gray-400 shadow rounded-md px-5'>
                    <FaPlusCircle></FaPlusCircle>
                    <span>1</span>
                    <FaMinusCircle></FaMinusCircle>
                </div>
            </div>
            <div className="card-actions justify-start">
            <button className="btn btn-primary"><FaHeart></FaHeart></button>
            <button className="btn btn-primary">Add To Cart</button>
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default BigCard;