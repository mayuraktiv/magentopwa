import React, { Component } from 'react';
import CatMenuImage from './CatMenuImage';

import '../style/base.scss';

export default class CatMenuIMages2x2 extends Component {
    render() {
        return (
            <div className="container cat_img_col _2x2">
                <div className="row">
                    <div className="col-md-6">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-6">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-6">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-6">
                        <CatMenuImage></CatMenuImage>
                    </div>
                </div>
            </div >
        )
    }
}