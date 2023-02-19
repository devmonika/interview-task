import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./contact.css"
const Contact = () => {
    return (
        <div>
            <div className='bg-yellow-500'>
                <div className='flex justify-center align-center'>
                    <div>
                        <img src='https://i.postimg.cc/pLSqWvF0/image-1.png' alt="" className=''/>
                        <div className='h-60 w-full bg-slate-400 shadow-lg'></div>
                        <div className='text-center content'>
                            <h3>Name</h3>
                            <p>Designation</p>
                            <ul className='flex  justify-center'>
                                <li><FaFacebook></FaFacebook></li>
                                <li><FaInstagram></FaInstagram></li>
                                <li><FaTwitter></FaTwitter></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src='https://i.postimg.cc/wMJQjRDF/image-2.png' alt="" className=''/>
                        <div className='text-center content'>
                            <h3>Name</h3>
                            <p>Designation</p>
                            <ul className='flex  justify-center'>
                                <li><FaFacebook></FaFacebook></li>
                                <li><FaInstagram></FaInstagram></li>
                                <li><FaTwitter></FaTwitter></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src='https://i.postimg.cc/m2YSxMLg/image-3.png' alt="" className=''/>
                        <div className='text-center content'>
                            <h3>Name</h3>
                            <p>Designation</p>
                            <ul className='flex justify-center'>
                                <li><FaFacebook></FaFacebook></li>
                                <li><FaInstagram></FaInstagram></li>
                                <li><FaTwitter></FaTwitter></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;