import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (<div>
            <div className="logo">Логотип</div>
            <ul className="menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/page1'>Page1</Link></li>
                <li><Link to='/page2'>Page2</Link></li>
            </ul>
        </div>)
    }
}

export default Header