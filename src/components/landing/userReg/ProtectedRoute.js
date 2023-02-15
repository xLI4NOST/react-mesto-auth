import React from 'react';
import { Route, Navigate } from "react-router-dom";

function ProtectedRouteElement ({isLogin, children} )  {
  if(isLogin){
    return children
  } else{
    return <Navigate to="/sign-in" replace/>
  }
 };

export default ProtectedRouteElement;