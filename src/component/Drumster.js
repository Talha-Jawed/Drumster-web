import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer'
import mobImg from '../assets/6.png'
import halfMobile from '../assets/2.png'
import MobileImg from '../assets/5.png'
import mobile from '../assets/1.png'
import Icon from '../assets/Icon.png'
import Phones from '../assets/Phones.png'
import google_playIcon from '../assets/google_playIcon.png'
import { ReactComponent as Logo } from '../assets/Logo Start.svg';
import { ReactComponent as Menu } from '../assets/ic_menu.svg';
import { ReactComponent as Google } from '../assets/ic_google.svg';
import { ReactComponent as Apple } from '../assets/ic_apple.svg';
import history from '../history'

class Drumster extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    clickMenu() {
        history.push('/Menu')
        localStorage.setItem('path', '/')
    }

    render() {
        return (
            <div>
                <div className='drumster-header'>
                    <div className='drumster-logo'>
                        <Logo className='drumster-image' />
                    </div>
                    <div className='drumster-title'>
                        <p className='drumster-heading'><span className='textUnderline'>Smart</span> cable <br /> drum recycling.</p>
                        <p className='drumster-text'>The most way to convenient cable drums and at the same time be rewarded.<br /> Download the Drumster App </p>
                        <div className='btns'>
                            <p className='btnApp'><Apple className={'btnStyle'} /> On App Store</p>
                            <p className='btnApp'><img className={'btnIconGoogle btnStyle'} src={google_playIcon} alt='logo' /> On Google Play</p>
                        </div>
                    </div>
                    <div className='drumster-centerSpace'></div>
                    <div className='drumster-halfImg'>
                        <img className='drumster-image' src={halfMobile} alt="Logo" />
                        <img className='drumster-image' src={MobileImg} alt="Logo" />
                    </div>
                    <div className='drumster-mobileImg'>
                        <img className='drumster-image' src={mobile} alt="Logo" />
                    </div>
                    <div className='drumster-menuIcon'>
                        <Menu className='drumster-image' onClick={() => this.clickMenu()} />
                    </div>
                </div>
                <div className='drums-question'>
                    <div className='drums-space'></div>
                    <div className='drums-content'>
                        <p className='drumster-heading' >Let's get <span className='textUnderline'>rid of</span> all them drums.</p>
                        <p className='drums-text'>The Drumster app make its easy for you to keep the workspace tidy and clean, The drum send back  will get recycled to new drums. while you do a good job for the enviroment you will also be rewarded.</p>
                        <p className='qusBtn'>Still question? see Q&A</p>
                    </div>
                    <div className='druns-rightSpace'></div>
                </div>
                <div className='drums-question drums2'>
                    <div className='drumster-logo'></div>
                    <div className='drums-content'>
                        <p className='drumster-heading' >How it work,<br /> in <span className='textUnderline'>four</span> steps.</p>
                        <p className='drums-text'>The Drumster app make its easy for you to keep the workspace tidy and clean, The drum send back  will get recycled to new drums. while you do a good job for the enviroment you will also be rewarded.</p>
                        <p className='qusBtn'>Still question? see Q&A</p>
                    </div>
                    <div className='drumster-centerSpace'></div>
                    <div className='drumster-mobileImg2'>
                        <img className='drumster-image' src={mobile} alt="Logo" />
                    </div>
                    <div className='image2-rightSpace'></div>
                </div>
                <div className='drums-question'>
                    <div className='drums-space'></div>
                    <div className='drums-content'>
                        <p className='drumster-heading' >Donate to enviromental <span className='textUnderline'>charities</span></p>
                        <p className='drums-text'>The Drumster app make its easy for you to keep the workspace tidy and clean, The drum send back  will get recycled to new drums. while you do a good job for the enviroment you will also be rewarded.</p>
                        <p className='qusBtn'>Read more on object site</p>
                    </div>
                    <div className='druns-rightSpace'></div>
                </div>
                <div className='drumster-icon'>
                    <img className='drumster-iconImage' src={Icon} alt="Logo" />
                    <p className='drumster-headingIcon' >Download</p>
                    <p className='drumster-headingIcon' >Drumster <span className='textUnderline'>today </span></p>
                    <p className='drumster-text marginTop'>The drumster app is avilable where you </p>
                    <p className='drumster-text'> Download App. Get it today start</p>
                    <p className='drumster-text'>recycle and earn on your old drums</p>
                    <div className='btns-bottom'>
                        <p className='btnApp'><Apple className={'btnStyle'} /> {' On App Store'}</p>
                        <p className='btnApp'><img className={'btnIconGoogle btnStyle'} src={google_playIcon} alt='logo' /> {`  On Google Play`}</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Drumster;
