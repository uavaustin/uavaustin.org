import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

import socialAccounts from '../data/social.yml';

const SOCIAL_ICONS = {
    facebook: brands.faFacebook,
    github: brands.faGithub,
    instagram: brands.faInstagram,
    linkedin: brands.faLinkedin,
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
        return (
            <div className='social'>
                {socialAccounts.map((account) => {
                    return <SingleSocial key={account.type} type={account.type}
                            link={account.url}/>
                })}
            </div>
        );
    }
}
