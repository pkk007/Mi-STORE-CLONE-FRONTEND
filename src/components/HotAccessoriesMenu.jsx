import React from "react";
import { Link } from 'react-router-dom';
import '../styles/HotAccessoriesMenu.css';

const HotAccessoriesMenu=()=>{
    return(
        <div className="hotAccessoriesMenu">
            <Link className="hotAccessoriesLink" to='/music' >Music</Link>
            <Link className="hotAccessoriesLink" to='/smartDevice' >Smasrt Device</Link>
            <Link className="hotAccessoriesLink" to='/home' >Home</Link>
            <Link className="hotAccessoriesLink" to='/lifestyle' >Lifestyle</Link>
            <Link className="hotAccessoriesLink" to='/mobileAccessories' >Mobile Accessories</Link>
        </div>
    )
};

export default HotAccessoriesMenu;