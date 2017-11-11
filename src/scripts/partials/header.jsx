import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';

import Social from './social.jsx';

const MENU_ITEMS = [
    {
        name: 'About',
        url: '/about'
    },
    {   name: 'The Team',
        url: '/team'
    },
    {
        name: 'Our Fleet',
        url: '/fleet'
    },
    {
        name: 'Gallery',
        external_url: 'https://http.cat/404'
    },
    {
        name: 'Contact',
        url: '/contact'
    }
];

class DesktopMenu extends React.Component {
    render() {
        return (
            <span className='desktop-menu'>
                {MENU_ITEMS.map((item) => {
                    if (item.external_url !== undefined) {
                        // For menus with external URLs
                        return <a className='menu-item' key={item.name}
                                target='_blank' href={item.external_url}>
                            {item.name}
                        </a>;
                    } else {
                        // For menus with interal URLs we're using
                        // react-router-dom so we don't want refreshes
                        return <NavLink className='menu-item' key={item.name}
                                to={item.url}
                                activeClassName='menu-item-selected'>
                            {item.name}
                        </NavLink>;
                    }
                })}
            </span>
        );
    }
}

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to='/'>
                    <img className='wide-logo'
                            src='./assets/uavaustin-text-logo.svg'
                            alt='UAV Austin'/>
                </Link>
                <Social />
                <DesktopMenu />
                <span className='hamburger-menu'>
                    <FontAwesomeIcon icon={faBars} size='2x'/>
                </span>
            </header>
        );
    }
}
