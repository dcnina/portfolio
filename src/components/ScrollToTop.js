import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Component} from "react";
import { withRouter } from 'react-router-dom';

function ScrollToTop(props) {
  const { pathname } = useLocation();

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);
 

  return null;
}

// function ScrollToTop({ history }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     }
//   }, []);

//   return (null);
// }

export default withRouter(ScrollToTop);