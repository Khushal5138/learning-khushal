import UseUserData from "./UseUserData";

const CustomHookUser = () => {
    const userOb = UseUserData();

    return (
        <div>
            Name : {userOb.name} and Age : {userOb.age}
        </div>
    );
};
export default CustomHookUser;