import React, { Component } from 'react';
import '../style/partials/_form.scss';

export default class UserShippingaddressdetail extends Component {
    render() {
        return (
            <div className='usershippingaddress-detail'>
               <div className='shipping-address-items'>
                   <ol>
                       <li className='shipping-address-item selected-item'>
                       Chris Colson<br/>3066,Joyce Street, Gulf Shores, Alabama,<br/>36542, United States, 251-968-2787.<br/>residential
                       <br/><a href='#' className='ship_bn'>Ship here</a>
                       </li>
                       <li className='shipping-address-item not-selected-item'>
                       Chris Colson<br/>3066,Joyce Street, Gulf Shores, Alabama,<br/>36542, United States, 251-968-2787.<br/>residential
                       <br/><a href='#' className='ship_bn'>Ship here</a>
                       </li>
                   </ol>
               </div>
            </div>
        );
    }
}
