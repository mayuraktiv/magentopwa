import { useHistory, useLocation } from "react-router-dom";

const useReplacePath = () => {
  const history = useHistory();
  const location = useLocation();
  const replacePath = (path) => {
    const pathInfo = {
        pathname: path
    }
    if(location.state?.redirectPath?.length > 0) {
        pathInfo['state'] = { redirectPath: location.state.redirectPath };
    }
    history.replace(pathInfo);
  };

  return { replacePath };
};

export default useReplacePath;
