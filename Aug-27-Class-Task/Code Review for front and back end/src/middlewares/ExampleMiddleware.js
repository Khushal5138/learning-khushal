
function exampleMiddleware(storeAPI) {
    return function wrapDispatch(next){
        return function handleAction(action){

            //make your changes here
            console.log("see whatever changes you did here");
            console.log(action);
            let newAction = {...action , verifiedBy: "exampleMiddleware"};
            return next(newAction);
        };
    };
}
export default exampleMiddleware;