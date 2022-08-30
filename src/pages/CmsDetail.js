import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import cmsDetailApp from '../controllers/apps/cmsDetailApp';
import { CircularProgress } from '@material-ui/core';

export default class CmsDetail extends cmsDetailApp {
    render() {
        return (
            <div id="page_wrapper">
                <div className="home-page">
                    <Header></Header>
                    <div id="maincontent" className="page-main">
                        {this.state.loading
                            ?
                            <CircularProgress size={25} color="#000" />
                            :
                            <div className='cms-page-content'>
                                {this.state.cmsData?.content?.length > 0
                                    ?
                                    <p dangerouslySetInnerHTML={{ __html: this.state.cmsData.content }}/>
                                    :
                                    <div>No content available!</div>
                                }
                            </div>
                        }
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}