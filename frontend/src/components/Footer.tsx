import logo from '../pages/logo.png';
import { useLocation } from 'react-router-dom';
import '../pages/thumbnail&details.css';
import '../pages/Font&Color.css';

export default function Footer() {
    const { pathname } = useLocation();
    if (pathname === "/")
      return null;

    return (
        <div className="footer">
            <img src={logo} alt='Logo' className='logo' />
            <h6 className='grey'>
                [본사] 경북 경주시 외동읍 제내2공단길 94 한진피엘 ㈜ | Tel 031-420-3200 | Fax 031-420-3120
            </h6>
            <h6 className='grey'>
                COPYRIGHT © 2021 <span className='white'>HANJIN PL.</span> ALL RIGHT RESERVED.
            </h6>
        </div>
    )
};
