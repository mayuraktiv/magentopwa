import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import userprofileRequest from "../request/userProfileRequest";
class myAccountApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.addLoginUser();
  };

  addLoginUser = async (data) => {
    const profile = await userprofileRequest.getUserProfile(data);
    console.log("addLoginUser--->", profile);
  };

  static mapStateToProps = (state) => {
   
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.mergeData(node, data)),
    };
  };
}

export default myAccountApp;
