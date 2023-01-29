import React from "react";
import "./Card.css";
import { IoIosRadioButtonOff } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai"
import { CgArrowUpO, CgArrowTopRightO, CgArrowDownO } from "react-icons/cg"

function Card(props) {
  return (
    <div className="main">
      <div className="card">
        <div className="card__body">
          <img src={props.img} alt="" class="card__image" />

          <div className="ok first">
            <span className="card__title">{props.title}</span>
            <span className="card__description">&#8377;{props.description}</span>
          </div>

          <div className="ok second">
            <div>
              <span> <IoIosRadioButtonOff /> </span>
              <span> <IoIosRadioButtonOff color="red" /> </span>
              <span> <IoIosRadioButtonOff color="green" /> </span>
            </div>

            <div>
              <span> <CgArrowUpO /> </span>
              <span> <CgArrowTopRightO /> </span>
              <span> <CgArrowDownO /> </span>
            </div>
          </div>

          <div className="ok third">
            <div className="ok as">
              <div><AiOutlineStar /></div>
              <div>{props.rating}</div>
            </div>

            <button className="card__btn">buy</button>
          </div>
        </div>
      </div>
      
      <div className="small">
        <div className="right">
          <div>{props.coupon}</div>
          <div>{props.couponname}</div>
        </div>
        <div className="left"> 20% OFF</div>
      </div>
    </div>

  );
}

export default Card;
