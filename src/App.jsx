import React from "react";
import ReactDOM from 'react-dom';
import Nav from "./Nav"
import TopNav from "./TopNav.jsx";
import Main from "./Main";

const App = () => {
  return(
  <>
    <TopNav/>
    <Nav/>
    <Main/>
  </>
    
  );
}
export default App;