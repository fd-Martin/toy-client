import React from 'react';
import Bannar from '../Bannar/Bannar';
import ShopByCatagory from '../ShopByCatagory/ShopByCatagory';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../Hooks/useTitle';
import MarqueeSection from '../MarqueeSection/MarqueeSection';
import Benefits from '../Benefits/Benefits';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Bannar></Bannar>
            <Gallery></Gallery>
            <ShopByCatagory></ShopByCatagory>
            <Benefits></Benefits>
            <MarqueeSection></MarqueeSection>
        </div>
    );
};

export default Home;