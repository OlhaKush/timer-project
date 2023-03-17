import styles from './NavBar.module.scss';

import {useState} from 'react';
import {useDispatch} from 'react-redux';
import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";

const NavBar = () => {

    return (
        <nav className={styles.nawBar}>
            <Container >
                <div className={styles.navContainer}>
                    <span><a className="fa fa-tasks" href='/'/></span>
                <div>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}><a href='/'>Home</a></li>
                        <li className={styles.navListItem}><a href='/favorite'>Favorite</a></li>
                        <li className={styles.navListItem}><a href='/about'>About</a></li>
                    </ul>
                </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;




