import React from 'react';
import { MdEmail,MdSearch } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {
    return (

  
    
    <div className="w-full navbar mt-[10%]">
      <div className="lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">
        <h2  style={{fontFamily:'Podkova', fontWeight:"600",fontSize:"36px",lineHeight:"40px"}}>Headphone 
        <br/>
        <span style={{fontFamily:'Podkova', fontWeight:"600",fontSize:"18px"}}>For the top band</span>
        </h2>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal flex">
          
          {/* <input type="text" placeholder="Search Product" className="input w-full max-w-xs shadow-md shadow-gray-600 rounded-[10px]" /> */}
          <li className="bg-green-400 rounded-md"><Link to="#" className='text-3xl'><MdEmail></MdEmail></Link></li>
          <li className="bg-lime-300 rounded-md mx-"><Link to="#"  className='text-3xl'><FaBell></FaBell></Link></li>
          <li className="bg-lime-500 rounded-md"><Link to="#"  className='text-3xl'><FaUserAlt></FaUserAlt></Link></li>
        </ul>
      </div>
    </div>
    
   
 

    );
};

export default Header;