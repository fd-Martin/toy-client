import React from 'react';
import Bannar from '../Bannar/Bannar';
import Gallary from '../Gallary/Gallary';
import ShopByCatagory from '../ShopByCatagory/ShopByCatagory';
import ExtraSection1 from '../ExtraSection1/ExtraSection1';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Gallary></Gallary>
            <ShopByCatagory></ShopByCatagory>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;