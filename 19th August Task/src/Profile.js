import Pic from "./Revanth.jpg";
function MyProfile(){
    return(
        <div><h1>Product Info</h1>
            <div className="outer"> 
                <div id="MyInfo"> 
                    <h2>
                        Name: Revanth<br/>
                        Course: FrontEnd Trainee<br/>
                        Age:22<br/>
                        Location: Bangalore
                    </h2>
                </div>
                <div id="MyPic">
                    <img src={Pic} alt="Revanth Pic" height={"170px"} width={"200px"} />
                </div>
            </div>
        </div>
    );
}

export default MyProfile;