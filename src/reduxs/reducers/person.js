import  {ADDPERSON} from '../const'

const initState = [{id:1,name:'xc',age:24}]
export default  function person(preState = initState ,action){
    const {type,data} = action;
    switch (type) {
        case ADDPERSON:
            return [data,...preState]
    
        default:
          return preState
    }
}