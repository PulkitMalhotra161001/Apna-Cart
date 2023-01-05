//imr
import React from "react";

//class based and functional component
//cc
//make sure javascript react is selected at bottom
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Apna Cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
