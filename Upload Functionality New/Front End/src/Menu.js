import { Link } from "react-router-dom";
import App from "./App";

function Menu(props)
{
    console.log(props);
    return(
        <div className="Menu">
            <Link to="#">Home</Link>
            <Link to="#">About</Link>
            <Link to="#">Contact</Link>
            <Link to="#">Team</Link>
            {
                props.menuData.map(function(value)
                {
                    return(
                        <div>
                            <br/><br/><Link to={value.path}>{value.title}</Link><br/><br/><br/>
                            
                        </div>
                    )
                })
            }
        </div>

    );
}
export default Menu;

// import React from 'react';
// import { Link } from "react-router-dom";

// const Menu = ({ onLogout } , props) => {
//     return(
//                 <div className="Menu">
//                     <Link to="#">Home</Link>
//                     <Link to="#">About</Link>
//                     <Link to="#">Contact</Link>
//                     <Link to="#">Team</Link>
//                     {
//                         props.menuData.map(function(value)
//                         {
//                             return(
//                                 <div>
//                                     <br/><br/><Link to={value.path}>{value.title}</Link><br/><br/><br/>
                                    
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//   );
// };

// export default Menu;

