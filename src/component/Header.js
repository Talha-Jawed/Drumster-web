import React from 'react';
import '../App.css';
import { ReactComponent as Menu } from '../assets/img/ic_menu.svg';
import { ReactComponent as Logo } from '../assets/img/Black Header Logo.svg';
import history from '../history'

function Footer() {
    return (
        <div className='header' >
            <div className='header-content'>
                {/* <div> */}
                <Logo className='headerLogo' onClick={()=> history.push('/')} />
                {/* </div> */}
                {/* <div> */}
                <Menu className='headerMenu' onClick={()=> history.push('/Menu')}/>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Footer;
