import { Redirect, Route } from "react-router-dom";
import { isLogin } from "../Utilities/Index";


function PrivetRoute({component:Component , ...rest}) {
    return (
      <Route {...rest} render = { props => (
        isLogin() ? 
        <Component {...props} />
        :
         <Redirect to="/Login" />
      )}
      />
    );
}

export default PrivetRoute;