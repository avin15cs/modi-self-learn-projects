import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";

const Restaurant = () => {

    //this is an object
    const myStyle={color: "red" };
    //useStateHooks => kaa kaam hai kisi bhi data ko apne paas hold karke rakhna
    //useState()=> returns array of two elements 
    // 1. state variable
    // 2. updated function
    //data ko manage karne ke liye we use useState() func.

    //format: const [menuData, setMenuData] = useState(initialdata);
    
    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData);

  return (
    <>   
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle" style={myStyle}>Breakfast</span>
                    <h2 className='card-title'>Maggi</h2>
                    <span className="card-description subtle"> I love Maggi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At libero veritatis officia porro ab inventore!</span>
                    <div className='card-read'>Read</div>
                </div>
                {/* <img src={image} alt="image" className='card-media'/> */}

                <span className='card-tag subtle'>Order Now</span>
            </div>
        </div> 
    </> 
  );
};

export default Restaurant;