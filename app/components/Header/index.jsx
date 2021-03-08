import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.styl';

class Header extends React.Component {
    render(){
        return (
        <React.Fragment>
            <ul className={styles.menu}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/page1'>Page1</Link></li>
                <li><Link to='/page2'>Page2</Link></li>
            </ul>
        </React.Fragment>)
    }
}

export default Header