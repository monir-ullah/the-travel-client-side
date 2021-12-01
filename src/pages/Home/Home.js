// This is import all import file to use in the Home page
import React, { useEffect, useState } from 'react';
import PopularCities from '../../ExtraComponents/PopularCities/PopularCities';
import WhyChooseUs from '../../ExtraComponents/WhyChooseUs/WhyChooseUs';
import ClipLoader from "react-spinners/ClipLoader";
import TourDestination from '../TourDestination/TourDestination';
import './Home.css';
import MainHeaderArea from './MainHeaderArea/MainHeaderArea';


// Here I added All components that i want to show in the home page
const Home = () => {
   
    const [loading, setLoading] = useState(false);

     useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
                setLoading(false)
        }, 8000)
     }, [])
    
    return (   
        <div>
          
            {/* This is Main heading Area.  */}
            <MainHeaderArea></MainHeaderArea>

            {/* This is use for Why Choose Us . This is extra one*/}
            <WhyChooseUs></WhyChooseUs>

            {/* This is use for Popular Cities Section This is Extra two */}
            <PopularCities></PopularCities>

            {/* This is use for Destination section */}
            <TourDestination></TourDestination>)
            
        </div>
            
    );
};

export default Home;