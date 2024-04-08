import React from 'react';
import Bannar from '../Bannar/Bannar';

import ShopByCatagory from '../ShopByCatagory/ShopByCatagory';
import ExtraSection1 from '../ExtraSection1/ExtraSection1';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Gallery></Gallery>
            <ShopByCatagory></ShopByCatagory>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;