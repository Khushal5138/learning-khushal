import {Link} from "react-router-dom";

export default function Menu({menuData}){
    return (
        <div className="Menu">
            {/* <b><Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Team</Link>
            <Link href="#">Office Location</Link></b> */}
            {
                menuData.map(function(value,indx){
                    return(
                        <div>
                            <Link to={value.path}>{value.title}</Link><br/>
                        </div>
                    );
                })
            }
        </div>
    )
}

