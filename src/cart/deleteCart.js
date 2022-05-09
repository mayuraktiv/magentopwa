import { Fragment } from "react";
import { connect } from "react-redux";
import deleteCartApp from "../controllers/apps/deleteCartApp";

class DeleteCart extends deleteCartApp {
    render() {
        return (
            <Fragment>
                {this.props.pageType === "cart"
                    ?
                    <a class="material-icons" onClick={this.deleteCart}>delete</a>
                    :
                    <div className="c_action">
                        <a className="c_action_link" onClick={this.deleteCart}><i className="material-icons">close</i></a>
                    </div>
                }
            </Fragment>
        )
    }
}

export default connect(deleteCartApp.mapStateToProps, deleteCartApp.mapDispatchToProps)(DeleteCart);