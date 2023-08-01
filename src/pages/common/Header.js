import mainLogo from '../../assets/images/logo.png';
import {useRef, useEffect} from 'react';

function Header(){

    const ref = useRef(null);

    // Active on Scroll
    window.addEventListener('scroll', () => {
        const pageHeader = document.querySelector('.header')
        const windowScroll = window.scrollY
        if(windowScroll > 100){
            pageHeader.classList.add('sticky')
        } else {
            pageHeader.classList.remove('sticky')
        }
    })

    // Nav Open and Close
    const rootBlock = document.getElementById('root')
    const NavFunction = () => {
        rootBlock.classList.add('slide')
    }
    const CloseNav = () => {
        rootBlock.classList.remove('slide')
    }

    return(
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={mainLogo} alt="Logo" />
                </div>
                <div className="header__nav">
                    <span className="header__nav__close" onClick={CloseNav}>
                        <svg width="0" height="0" viewBox="0 0 50 50">
                            <path d="M24.74,30.44,5.39,49.78.18,44.57,19.52,25.22,0,5.71,5.71,0,25.22,19.52,43.14,1.61l5.21,5.21L30.44,24.74,50,44.3,44.29,50Z" transform="translate(0)"></path>
                        </svg>
                    </span>
                    <span ref={ref} className="header__nav__item">Home</span>
                    <span ref={ref} className="header__nav__item">Profile</span>
                    <span ref={ref} className="header__nav__item">Skills</span>
                    <span ref={ref} className="header__nav__item">Portfolio</span>
                </div>
                <div className="header__right">
                    <span className="header__right__btn">Contact</span>
                    <div className="header__right__lines" onClick={NavFunction}>
                        <span className="header__right__lines__line xxx"></span>
                        <span className="header__right__lines__line header__right__lines__line--mid"></span>
                        <span className="header__right__lines__line"></span>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header