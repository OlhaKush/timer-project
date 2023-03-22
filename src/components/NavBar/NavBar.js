import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import Container from "../Container/Container";


const NavBar = () => {

    return (
        <nav className={styles.nawBar}>
            <Container >
                <div className={styles.navContainer}>
                   <Link to="/"><span className="fa fa-tasks"></span></Link>
                <div>
                    <ul className={styles.navList}>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                    </ul>
                </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;




