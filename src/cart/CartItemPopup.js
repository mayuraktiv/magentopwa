import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import ProName from '../product/ProName';
import ProImage from '../product/ProImage';
import Price from '../product/ProPrice';
import FieldQty from '../product/FieldQty';
// import QtyBox from '../product/QtyBox';

export default class CartItem extends Component {
    render() {
        return (
            <li className={classnames('cart_item', this.props.className)}>

                <div className="c_item_col">
                    <div className="c_item_wrapper d-flex align-items-center">
                        <div className='c_item_image'>
                            <ProImage></ProImage>
                        </div>
                        <div className="c_item_info">
                            <div className='c_name_price'>
                                <ProName>Product Grid name goes here long maximum two lines.</ProName>
                                <Price params={{ type: 0 }}></Price>
                            </div>
                            <div className='c_qty'>
                                <FieldQty></FieldQty>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c_action">
                    <Link className="c_action_link" to="#"><i className="material-icons">close</i></Link>
                </div>
            </li>
        );
    }
}