import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import NotFound from "../img/NotFound.svg";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import AddToCart from "./AddToCart";

const RowContainer = ({ flag, data, scrollValue }) => {
  // console.log(data.length)
  const rowContainer = useRef();
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const addItemHandler = (item) => {
    // console.log("item:", item, "cartItems:", cartItems);
    if (cartItems.indexOf(item) !== -1) {
      cartItems[cartItems.indexOf(item)].qty += 1;
      setItems([...cartItems])
    } else {
      item.qty = 1;
      setItems([...cartItems, item]);
    }
  };

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    dispatch({
      type: actionType.ALTER_ITEM,
      subTotal: items.reduce(function (accumulator, item) {
        return accumulator + item.qty * item.price;
      }, 0),
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    const scrollMax = rowContainer.current.scrollWidth;
    rowContainer.current.scrollLeft = scrollValue % scrollMax;
  }, [scrollValue]);

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 min-w-[275px] md:w-300 md:min-w-[300px] h-[175px] p-2 my-12 bg-cardOverlay rounded-lg backdrop-blur-lg hover:drop-shadow-md ease-in"
          >
            <div className="w-full h-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt="item-img"
                className="w-[140px] h-[120px] -mt-8 drop-shadow-xl"
              />
              <div className="w-full h-full flex flex-col items-end justify-end">
                <p className="text-left break-all text-textColor font-semibold text-base md:text-lg">
                  {item?.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item?.calories} calories
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">￥</span>{" "}
                    {item?.price}
                  </p>
                </div>
                <AddToCart item={item} onAdd={addItemHandler}/>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img scr={NotFound} className="h-[120px]" alt="" />
          <p className="text-xl text-headingColor font-semibold">
            {"Items not available :( 🥄"}{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
