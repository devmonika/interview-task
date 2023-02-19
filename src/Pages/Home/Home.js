import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import MainContent from '../Content/MainContent/MainContent';


const Home = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
        <Header></Header>
        <MainContent></MainContent>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
      <li><a>MK Sounds</a></li>
      <li><a>Home</a></li>
      <li><a>Explore</a></li>
      <li><a>Saved</a></li>
      <li><a>Cart</a></li>
      <li><a>Selling</a></li>
      <li><a>Profile</a></li>
      <li><a>History</a></li>
      <li><Link to="/contact">Contact us</Link></li>
      <li><a>Setting</a></li>
    </ul>
  
  </div>
</div>
    );
};

export default Home;