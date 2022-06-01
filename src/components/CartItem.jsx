import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMinus, HiPlus } from "react-icons/hi";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const CartItem = ({ item }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(true);
  const [showItem, setShowItem] = useState(true);

  const decreaseAmount = (item) => {
    cartItems[cartItems.indexOf(item)].qty -= 1;
    if (cartItems[cartItems.indexOf(item)].qty === 0) {
      cartItems.splice(cartItems.indexOf(item), 1);
      setShowItem(false);
    }
    setFlag((pre) => !pre);
  };

  const increaseAmount = (item) => {
    cartItems[cartItems.indexOf(item)].qty += 1;
    setFlag((pre) => !pre);
  };

  const updateTotal = () => {
    dispatch({
      type: actionType.ALTER_ITEM,
      subTotal: cartItems.reduce(function (accumulator, item) {
        return accumulator + item.qty * item.price;
      }, 0),
    });
  };

  useEffect(() => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: cartItems,
    });
    updateTotal();
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [flag]);

  return (
    showItem && (
      <div className="flex items-center gap-4">
        {/* img */}
        <img
          src={item?.imageURL}
          className="w-20 h-20 rounded-full object-contain"
          alt=""
        />
        {/* detail info */}
        <div className="w-full flex justify-between">
          <div>
            <p className="text-gray-50 font-semibold">{item?.title}</p>
            <p className="text-gray-200">
              <span className="text-red-400">￥ </span>
              {item?.price * item?.qty}
            </p>
          </div>

          <div className="flex items-center">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="flex text-gray-300"
            >
              <HiMinus
                className="cursor-pointer"
                onClick={() => decreaseAmount(item)}
              />
            </motion.div>
            <span className="text-orange-500 bg-cardBg px-2">{item?.qty}</span>
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="flex text-gray-300"
            >
              <HiPlus
                className="cursor-pointer"
                onClick={() => increaseAmount(item)}
              />
            </motion.div>
          </div>
        </div>
      </div>
    )
  );
};

export default CartItem;
