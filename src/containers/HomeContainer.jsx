import UserComponents from "../components/UserComponents";
import { AddToCart } from "../services/actions/ActionsHome";
import { connect,useDispatch } from "react-redux";
const mapDispatchToProps=dispatch=>({
addCartHandler:data=>dispatch(AddToCart(data))
})
const mapStateToProps=state=>({
cartData:state
})
export default connect(mapDispatchToProps,mapStateToProps)(UserComponents)
// export default UserComponents;