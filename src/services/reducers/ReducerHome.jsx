import {ADD_TO_CART} from "../Constant";
const initialState={
    cartData:[]
}
export default  function cartItems(state=initialState,action){
    switch (action.type){
        case ADD_TO_CART:
            console.log("reducer111",action)
            return{
                ...state,
                cartData:action.data
            }
            
            default:
                return state;
                
    }
}