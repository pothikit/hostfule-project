import React, { Component } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class FacebookCustomMsg extends Component {
    render() {
        return (
            <FacebookProvider appId="782029750618062" chatSupport>
                <CustomChat pageId="253943371128212" minimized={false} />
            </FacebookProvider>
        );
    }
}