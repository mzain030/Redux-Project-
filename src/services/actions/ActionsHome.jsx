import { ADD_TO_CART} from "../Constant";
export const AddToCart=(data)=>{
    console.log("actionData",data)
    return{
        type: ADD_TO_CART,
        data:data
    }
}

// export const RemoveToCart=(data)=>{
//     return{
//         type:"REMOVE_TO-CART",
//         data:data
//     }
// }