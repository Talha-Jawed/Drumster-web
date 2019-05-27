import React from 'react';
import '../App.css';
import { ReactComponent as PlayStore } from '../assets/img/app-store.svg';
import { ReactComponent as AppStore } from '../assets/img/play-store.svg';
import { ReactComponent as Logo } from '../assets/Black Header Logo.svg';


function Footer() {
    return (
        <div className='footer' >
            <div className='footer-content'>
                <div>
                   <Logo className='iconsMenu'/>
                </div>
                <div>
                    <p className='footer-text'>Copyright 2019 , PM FLEX Svrige AB , Orgnr: 556737-8350</p>
                </div>
                <div>
                    <AppStore className='iconsMenu'/>
                    <PlayStore className='iconsMenu'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
