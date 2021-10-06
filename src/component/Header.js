import React from "react";
import './../index.css'



const Header = ({ handleToggleMode}) => {
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={() => handleToggleMode((priviousMode) => !priviousMode)
                } 
            className='btn-mode'>Toggle</button>
        </div>

    )
}

export default Header;