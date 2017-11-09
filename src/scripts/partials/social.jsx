import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

import socialAccounts from '../data/social.yml';

const SOCIAL_ICONS = {
    facebook: brands.faFacebook,
    github: brands.faGithubAlt,
    instagram: brands.faInstagram,
    linkedIn: brands.faLinkedin,
    slack: brands.faSlack,
    twitter: brands.faTwitter
};

export class SingleSocial extends React.Component {
    render() {
        let icon = SOCIAL_ICONS[this.props.type];
        let size = this.props.size || '2x';
        let link = this.props.link;

        return (
            <a target='_blank' className='social-icon' href={link}>
                <FontAwesomeIcon icon={icon} size={size}/>
            </a>
        );
    }
}

export default class Social extends React.Component {
    render() {
        return socialAccounts.map((account) => {
            return <SingleSocial type={account.type} link={account.url}/>
        });
    }
}
