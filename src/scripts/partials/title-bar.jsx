import React from 'react';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div className='title-bar'>
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}
