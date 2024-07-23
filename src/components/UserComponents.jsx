import React from 'react'
import { Fru, Iphone,AddCart } from './images/Index';
import "./style.css"
const UserComponents = (props) => {
    console.log("Home props",props)
         
    return (
        <center>
            
            <div>
                <img src={AddCart} className='addcartimg'></img>
            </div>
            <div className='main'>
            <h1 className='heading'>Home Components</h1> 
            </div>
           
            <div className='wrapperdiv'>
                <div className='imgdiv'>
                    <img src={Iphone} className='iphoneimg'></img>
                </div>
                <div className='pricediv'>
                    <span>
                        I-Phone 14
                    </span><br></br>
                    <span>
                        Price:$1000.00
                    </span>
                </div>
                <div className='addcartdiv'>
                    <button className='buttondiv'
                    onClick={()=>props.addCartHandler({price:1000,name:"I phone 11"})}
                    >Add To Cart</button>
                </div>
            </div>

        </center>
    )
}

export default UserComponents;