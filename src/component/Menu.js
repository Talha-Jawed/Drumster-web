import React, { Component } from 'react';
import '../App.css';
import { ReactComponent as PlayStore } from '../assets/img/app-store.svg';
import { ReactComponent as AppStore } from '../assets/img/play-store.svg';
import closeImg from '../assets/close.png'
import history from '../history'

class MenuItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    QA() {
        history.push('/Q&A')
        localStorage.setItem('path', '/Q&A')
    }

    close() {
        var path = localStorage.getItem('path')
        history.push(path)
    }

    termCondition() {
        history.push('/TermAndCondition')
        localStorage.setItem('path', '/TermAndCondition')
    }

    render() {
        return (
            <div className='menuu' >
                <div className='menuLeft'>
                </div>
                <div className='menuRight'>
                    <div className='menuRightWhite'>
                        <div className='menuClose'>
                            <div className='clsbtn'>
                            </div>
                            <div >
                                <img className='closeImg' src={closeImg} onClick={() => this.close()} />
                            </div>
                        </div>
                        <div className='menuTitleDiv' >
                            <p className='menuTitle'>Download </p>
                            <p className='menuTitle'> How it Work</p>
                            <p className='menuTitle'> Charity</p>
                        </div>
                    </div>
                    <div className='menu-content'>
                        <div className='menu-li'>
                            <p className='menu-list' onClick={() => this.QA()}>Q&A</p>
                            <p className='menu-list' >Privacy Policy</p>
                            <p className='menu-list' onClick={() => this.termCondition()}>Terms & Conditions</p>
                        </div>
                        <div className='social-icon'>
                            <PlayStore className='iconsMenu' />
                            <AppStore className='iconsMenu' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuItem;
