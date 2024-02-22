import React, { Component } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class FacebookCustomMsg extends Component {
    render() {
        return (
            <FacebookProvider appId="782029750618062" chatSupport rel="noreferrer">
                <CustomChat pageId="198137493375467" minimized="false" />
            </FacebookProvider>
        );
    }
}