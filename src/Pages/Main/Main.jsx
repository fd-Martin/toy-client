
import Navber from '../../Shared/Navber';
import Footer from '../../Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <div className={`min-h-[calc(90vh-300px)]`}>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;