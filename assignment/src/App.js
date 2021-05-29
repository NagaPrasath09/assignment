import React,{useEffect,useState} from 'react'
import { addOffer, getOffer } from './APIcall';


const App = () => {
    const [value,setValue]=useState(0);
    const [coupon,setCoupon]=useState("");
    const [discount,setDiscount]=useState("");


    const tempProduct=[{id:1,amount:200,name:"First Product"},
                       {id:2,amount:300,name:"Second Product"},
                       {id:3,amount:400,name:"Third Product"},
                       {id:4,amount:500,name:"Fourth Product"}];
    const changeHandler=event=>{
        setCoupon(event.target.value)
    }
            
    const cardClick=(price)=>{
        setValue(value+price)
    }
    const checkDiscount=event=>{
        setDiscount("")
        event.preventDefault();
        let temp={}
        temp.code=coupon;
        temp.amount=value;
        console.log(temp);
        getOffer(temp).then((res)=>{
            if(res.Final_value){
                return setDiscount(res.Final_value)
            }else{
                return setDiscount("Check the coupon Code")
            }   
        })
    }
    const {v}=coupon;
    const cart=()=>{
        return(
            <div className="containere shadow">
            <h1>Cart amount : {value}</h1>
            <form>
            <div class="container mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter Coupon</label>
                <input  type="text" value={v} class="form-control" onChange={changeHandler} />
            </div>
            <button onClick={checkDiscount}>coupon</button>
            </form>
            <h1>Discount : Rs. {discount}</h1>
            </div>
        )
    }
    const card=()=>{
        return tempProduct.map((product,index)=>{
            return(
                <div className="card mt-3 shadow" key={index}>
                    <div className="card-Header">
                        {product.name}
                    </div>
                    <div class="card-body">
                        <h1>Rs.{product.amount}</h1>
                    </div>
                    <button onClick={()=>cardClick(product.amount)}>ADD CART</button>
                </div>
                )
        })
    }
    return (
        <div className="row">
            <div className="col-8">
                <div className="container">
                {card()}
                </div>
            </div>
            <div className="col-4">
                <div className="container">
                    {cart()}
                </div>
            </div>
        </div>
    )
}
export default App;