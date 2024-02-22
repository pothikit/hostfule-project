import React, { Component } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class FacebookCustomMsg extends Component {
    render() {
        return (
            // page id 198137493375467
            //app id 782029750618062
            <FacebookProvider appId="782029750618062" chatSupport>
                <CustomChat pageId="198137493375467" minimized="false" />
            </FacebookProvider>
        );
    }
}