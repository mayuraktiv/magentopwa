import React, { Component } from 'react';
import CategryMenu from './CategoryMenu';
import BlockSearch from './BlockSearch'
import UserIcon from './UserIcon'


export default class BottomHeader extends Component {
    render() {
        return (
            <div className="bottom-header">
                <div className="frame">
                    <div className="row">
                        <div className="col-3 middle-header-content-left">
                            <CategryMenu></CategryMenu>
                        </div>
                        <div className="col-9 middle-header-content-right">
                            <div className="search-section">
                                <BlockSearch></BlockSearch>
                                <UserIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}