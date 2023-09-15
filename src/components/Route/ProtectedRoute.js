import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {

  return (
    <Fragment>
        <Route
          {...rest}
          render={(props) => {
           

            return <Component {...props} />;
          }}
        />
    </Fragment>
  );
};

export default ProtectedRoute;