// import React, { useEffect } from "react";
// import { Route, Redirect } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
// const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/admin_login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;
