import React from 'react';
import { Link } from 'react-router-dom';
import commonParser from '../controllers/lib/commonParser';

const ProImage = ({ url_key, url }) => {
    return (
        <div className='product_img'>
            <Link className="product_img_link" to={commonParser.productLink(url_key)}>
                <img className="product_image image_block" src={url} alt="product_image" />
                {/* {this.props.params.type === 0 &&
                        <div className="product_img_cover product_box_img">
                            <img className="product_image image_block" src={productImage} alt="product_image" />
                        </div>
                    }
                    {this.props.params.type === 1 &&
                        <div className="product_img_cover product_circle_img">
                            <img className="product_image" src={productImage} alt="product_image" />
                        </div>
                    } */}
            </Link>
        </div>
    );
}

export default ProImage;