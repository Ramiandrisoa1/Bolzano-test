
import React from 'react';
import styles from '../styles/header.module.scss';
import { useState } from 'react';
import CartIcon from "../assets/icons/Cart-icon.svg";
import Logo from "../assets/icons/Logo.svg";

export const Header = () => {
    
    const [show, setShow] = useState(false)

    const showNav = (event) => {
        event.preventDefault()
        const element = document.querySelector('.menu_btn')
        if (!show) {
        element?.classList.add('open')
        setShow(true)
        } else {
        element?.classList.remove('open')
        setShow(false)
        }
    }

    return (
        <header>
            <div className={styles.navbar}>
                <nav>
                    <div onClick={showNav} className={styles.btn_animate + ' menu_btn'}>
                        <div className="menu_btn_animate"></div>
                    </div>
                    <div className={styles.logo}>
                        <img
                            src={Logo}
                            height={35}
                            quality={100}
                            alt=""
                        />
                    </div>
                    <ul className={styles.collapsed}>
                        <li><a href="/">SMART SLEEP COACH</a></li>
                        <li><a href="/">UPGRADE TO PRO</a></li>
                        <li><a href="/">SLEEP PLANS</a></li>
                        <li><a href="/">REVIEWS</a></li>
                        <li><a href="/">FAQs</a></li>
                    </ul>
                    <ul className={styles.collapsed}>
                        <li className={styles.cart_content}>
                            <a href="/">SIGN IN or REGISTER</a>
                            <img src={CartIcon} height={20} quality={100} alt=""/>
                        </li>
                    </ul>
                </nav>
                {show && (
                    <div className={styles.nav_collapsed}>
                        <div className={styles.nav_content}>
                            <ul>
                                <li><a href="/">SMART SLEEP COACH</a></li>
                                <li><a href="/">UPGRADE TO PRO</a></li>
                                <li><a href="/">SLEEP PLANS</a></li>
                                <li><a href="/">REVIEWS</a></li>
                                <li><a href="/">FAQs</a></li>
                                <li className={styles.cart_content}>
                                    <a href="/">SIGN IN or REGISTER</a>
                                    <img src={CartIcon} height={20} quality={100} alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
