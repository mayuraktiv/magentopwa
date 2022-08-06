import { connect } from "react-redux";
import configApp from "../../apps/configApp";
import CategoryContext from "./categoryContext";

class ConfigProvider extends configApp {
 
  render() {
    // console.log("object",this.props)
    return (
      <CategoryContext.Provider
        value={{ categories: this.props.categories }}
        {...this.props}
      />
    );
  }
}

export default connect(
  configApp.mapStateToProps,
  configApp.mapDispatchToProps
)(ConfigProvider);
