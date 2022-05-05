import React, { Fragment } from 'react';
import ProductMoreInfo from '../product/ProductMoreInfo';
import ProductDetailDesc from '../product/ProductDetailDesc';
import ProductReview from './ProductReview';

const ProDetailTab = ({ productDetail }) => {
    console.log("ProductDetailMain--->", productDetail);
    return (
        <div className="tab-section">
            <div className="row tab-row-content">
                <div className="col-md-12">
                    <Tabs>
                        <Tab label="Details">
                            <div className="tab-productdetails">
                                <ProductDetailDesc description={productDetail.description}/>
                            </div>
                        </Tab>
                        <Tab label="More Information">
                            <div className="tab-productinformation">
                                <ProductMoreInfo />
                            </div>
                        </Tab>
                        <Tab label="Reviews">
                            <div className="tab-productreviews">
                                <ProductReview productDetail={productDetail}/>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default ProDetailTab;

class Tabs extends React.Component {
    state = {
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

        this.setState({ activeTab: tab });
    };
    render() {

        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}

                <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
                <div className="tab-content">{content}</div>

            </div>
        );
    }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {

    return (
        <div className="tab-buttons">
            {buttons.map(button => {
                return <button className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)}>{button}</button>
            })}
        </div>
    )
}

const Tab = props => {
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}