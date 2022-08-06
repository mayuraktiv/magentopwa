import React, { Component } from 'react';
import MainSidebar from '../MyAccount/MainSidebar';


export default class DownloadableProduts extends Component {
    render() {
        return (
            <div className='columns frame'>
                <MainSidebar></MainSidebar>
                <div className='column main'>
                    <div className='message info empty'>
                        <span className='material-icons'>flag</span>
                        <span>You have not purchased any downloadable products yet.</span>
                    </div>
                    <div className='actions-toolbar-form'>
                        <a href='#' className='btn btn-secondary btn-bg'>Back</a>
                    </div>
                </div>
            </div>
        );
    }
}
