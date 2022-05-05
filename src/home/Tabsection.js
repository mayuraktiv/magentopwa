import React, { Component } from 'react';

import NewProduct from '../product/NewProduct'
import SaleProduct from '../product/SaleProduct';
import TopRatedProduct from '../product/TopratedProduct';

export default function Tabsection() {
    return (
        <div className="tab-section">
            <div className="frame">
                <div className="row">
                    <div className="content-heading">
                        <h3>SMART PHONE</h3>
                        <p className="block-note">Top view in the week</p>
                    </div>
                </div>
                <div className="row tab-row-content">   
                    <div className="col-md-12">
                        <Tabs>
                            <Tab label="New">
                                <div className="tab-newproduct">
                                  <NewProduct/>
                                </div>
                            </Tab>
                            <Tab label="Sale">
                                <div className="tab-saleproduct">
                                    <SaleProduct/>
                                </div>
                            </Tab>
                            <Tab label="Top Rate">
                                <div className="tab-toprateproduct">
                                    <TopRatedProduct/>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

class Tabs extends React.Component{
    state ={
      activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {
  
      this.setState({ activeTab: tab });
    };
    render(){
      
      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}
           
          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
          <div className="tab-content">{content}</div>
          
        </div>
      );
    }
  }
  
  const TabButtons = ({buttons, changeTab, activeTab}) =>{
     
    return(
      <div className="tab-buttons">
      {buttons.map(button =>{
         return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
      })}
      </div>
    )
  }
  
  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }