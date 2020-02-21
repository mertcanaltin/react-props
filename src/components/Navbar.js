import React from 'react'
import propTypes from   "prop-types";

 function Navbar(props) {
    return (
        <div>
 <h3>{props.title}</h3> 
        </div>
    )
}
Navbar.propTypes = {
    title : propTypes.string.isRequired
}
Navbar.defaultProps ={
    title : "Default App"
}
export default Navbar;