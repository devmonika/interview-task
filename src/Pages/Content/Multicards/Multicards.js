import React from 'react';

const Multicards = ({product}) => {
    const{name, order, picture,price,ratting,review,_id} = product;
    return (
       
            <div className="card w-40 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" className='h-20'/></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
            </div>
       
    );
};

export default Multicards;