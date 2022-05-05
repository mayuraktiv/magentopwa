import React, { Component } from 'react';
import CatMenuImage from './CatMenuImage';

import '../style/base.scss';

export default class CatMenuIMages3x3 extends Component {
    render() {
        return (
            <div className="container cat_img_col _3x3">
                <div className="row">
                    <div className="col-md-4">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-4">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-4">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-4">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-4">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-4">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-4">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-4">
                        <CatMenuImage></CatMenuImage>
                    </div>
                    <div className="col-md-4">
                        <CatMenuImage></CatMenuImage>
                    </div>
                </div>
            </div >
        )
    }
}