import React from 'react';
import Bannar from '../Bannar/Bannar';

import ShopByCatagory from '../ShopByCatagory/ShopByCatagory';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../Hooks/useTitle';
import MarqueeSection from '../MarqueeSection/MarqueeSection';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Bannar></Bannar>
            <Gallery></Gallery>
            <ShopByCatagory></ShopByCatagory>
            <MarqueeSection></MarqueeSection>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;