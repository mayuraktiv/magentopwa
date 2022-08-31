import React from 'react';
import { connect } from 'react-redux';
import proBoxApp from '../controllers/apps/proBoxApp';
import ProGridBox from './ProductGrid';
import ProListBox from './ProductList';

class ProBox extends proBoxApp {
    render() {
        return (
            <div className='product_box'>
                {this.props.productData &&
                    <div className="card">
                        {this.props.type === "grid" &&
                            <ProGridBox productData={this.props.productData} />
                        }
                        {this.props.type === "list" &&
                            <ProListBox productData={this.props.productData} />
                        }
                    </div>
                }
            </div>
        );
    }
}

export default connect(proBoxApp.mapStateToProps)(ProBox);