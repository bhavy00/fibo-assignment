import React from "react";
import menu from './data.js'

export default function Swipeup(){
    const dishCard = (data)=>{
        return (
            <div className="dishcard">
                <img src={data.img}></img>
                <div>
                    <h4>{data.Name}</h4>
                    <h5>{data.time}</h5>
                </div>
                <div>
                    <div className="calorie">
                        {data.calories}
                    </div>
                    <div className="plus">
                    <img src="../../public/images/icons8-plus.svg"></img>

                    </div>
                </div>
            </div>
        )
    }
    const menuCard = (data)=>{
        return (
            <div className="menucard">
                <div className="menutitle">
                <h2>{data.title}</h2>
                <h3>{data.origin}</h3>

                </div>
                <div className="dishes">
                    {data.dish.map((item)=>{
                        return (
                            dishCard(item)
                        )
                    })}
                </div>
            </div>

        )
    }
    const discountCarousel = ()=>{
        return (
            <div className="coupon">
                <div className="date">
                    27th JAN - 18th FEB 
                    <h3>UPTO</h3>
                    25% OFF
                </div>
                {["Chinese", "Indian", "Korean"].map((item)=>{
                    return (
                        <div className="discount">
                            {item}
                            <h3>&#8377;299/-</h3>
                            22% + 30% off - Expires in 1h
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className="swipeup">
            <div className="arrow">
            <img src="../../public/images/up-arrow-svgrepo-com.svg" alt="uparrow"></img> <br/>

            </div>
            <h2>Food Center</h2>
            <div>
                {menu.map((item)=>{return (menuCard(item))})}
            </div>
            <h2>Meals Coupon</h2>
                {discountCarousel()}
            <button className="order">Order Now</button>
        </div>
    )
}