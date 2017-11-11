import React from 'react';

import Social from './social.jsx';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Social />
                <span>
                    &copy; 2017 Unmanned Aerial Vehicle Team | UT&nbsp;Austin
                </span>
            </footer>
        );
    }
}
