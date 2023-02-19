import React, { useEffect, useState } from 'react';
import BigCard from '../BigCard/BigCard';
import Multicards from '../Multicards/Multicards';

const MainContent = () => {
    const[items, setProduct] = useState([]);
    useEffect(()=>{
        fetch('https://api.hiring.masterkey.tech/api/v1/product/get')
        .then(res=> res.json())
        .then(data => {
            setProduct(data.products)
            // console.log(data.products)
        })
    },[])
    return (
        <div className='grid grid-cols-2'>
            <div className='w-100'>
                {
                    items.slice(0, 1).map(product => <BigCard key={product.id} product={product}></BigCard>)
                }
                 <div className='grid grid-cols-3 gap-5'>
                {
                    items.slice(0, 3).map(product => <Multicards  key={product.id} product={product}></Multicards>)
                }
                 </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default MainContent;