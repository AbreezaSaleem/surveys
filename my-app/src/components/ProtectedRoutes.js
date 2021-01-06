import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";

function ProjectedRoutes({ 
  component: Component,
 }) {

  function isAuthenticated() {
    return !!localStorage.getItem('token')
  }
  return (
    <Route
      render={(props) => {
        if (isAuthenticated()) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProjectedRoutes;