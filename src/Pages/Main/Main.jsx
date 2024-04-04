
import Navber from '../../Shared/Navber';
import Footer from '../../Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;