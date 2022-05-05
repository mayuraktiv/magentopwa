import React from 'react';
import classnames from 'classnames';

export default class FieldQty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          quantity: 1,
          show: true,
          max: 5,
          min: 1
        };
    }

    IncrementItem = () => {
        this.setState(prevState => {
        if(prevState.quantity < 9) {
            return {
            quantity: prevState.quantity + 1
            }
        } else {
            return null;
        }
        });
    }
    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.quantity > 1) {
            return {
                quantity: prevState.quantity - 1
            }
            } else {
            return null;
            }
        });
    }
    ToggleClick = () => {
        this.setState({
            show: !this.state.show
        });
    }
    handleChange = (event) => {
        this.setState({quantity: event.target.value});
    }
    render() {
        return (
            <div className={classnames('field qty', this.props.className)}>
                <div className="qty-input">
                    <button  className='qty-count qty-count--minus' onClick={this.DecreaseItem}>-</button >
                    <input type="number" name="qty" className='product-qty'  min="1" max="30" value={this.state.quantity}  onChange={this.handleChange}></input>
                    <button  className='qty-count qty-count--add' onClick={this.IncrementItem}>+</button>
                </div>
            </div>
        );
    }
}