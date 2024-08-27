import UserContext from "./UserContext";
import PersonalDetails from "./PersonalDetails";
import User from "./User";

const Profile = () => {
    const currentValue = { name : "Khushal" , city : "Dubai"};

    return(
        <div>
            <UserContext.Provider value={currentValue}>
                <User/>
                <PersonalDetails/>
            </UserContext.Provider>
        </div>
    );
};
export default Profile;