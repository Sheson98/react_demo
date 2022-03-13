export default  function reducer(preState =0,action){
    const {type,data} = action
    switch(type){
        case "increment":
            return preState+data;
        case "decrement":
            return preState -data;
        case "incrementIfOdd":
            return preState+data;
        case "incrementAnsyc":
            return preState+data;
        default:
            return preState;
    } 
}