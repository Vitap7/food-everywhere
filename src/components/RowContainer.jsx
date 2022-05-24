import React from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

const RowContainer = ({ flag, data }) => {
  return (
    <div
      className={`w-full flex items-center gap-3 my-12 ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-auto p-2 my-12 bg-cardOverlay rounded-lg backdrop-blur-lg hover:drop-shadow-md ease-in"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.a}
                alt=""
                className="w-40 -mt-8 drop-shadow-xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                Fish!!!!!!!!
              </p>
              <p className="mt-1 text-sm text-gray-500">100 calories</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">￥</span> 45
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
