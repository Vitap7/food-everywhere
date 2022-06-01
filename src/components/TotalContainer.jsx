import React from "react";
import { motion } from "framer-motion";

const TotalContainer = ({user, subTotal}) => {
  return (
    <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
      <div className="w-full flex items-center justify-between">
        <p className="text-gray-400 text-lg">Sub Total</p>
        <p className="text-gray-400 text-lg">￥ {subTotal}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-gray-400 text-lg">Delivery</p>
        <p className="text-gray-400 text-lg">￥ {2.5}</p>
      </div>
      <div className="w-full border-b border-gray-600 my-2"></div>

      <div className="w-full flex items-center justify-between">
        <p className="text-gray-200 text-xl font-semibold">Total</p>
        <p className="text-gray-200 text-xl font-semibold">
          ￥ {subTotal + 2.5}
        </p>
      </div>

      {user ? (
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
        >
          Check Out
        </motion.button>
      ) : (
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
        >
          Login to check out
        </motion.button>
      )}
    </div>
  );
};

export default TotalContainer;
