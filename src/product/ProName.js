import React from 'react';
import { Link } from 'react-router-dom';
import H6 from '../common/H6';
import commonParser from '../controllers/lib/commonParser';

const ProName = ({ url_key, children }) => {
    return (
        <Link to={commonParser.productLink(url_key)}>
            <div className='product_name'>
                <H6>{children}</H6>
            </div>
        </Link>
    );
}

export default ProName;