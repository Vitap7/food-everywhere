import React from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

const AddToCart = ({ item, onAdd }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.75 }}
      className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
      onClick={() => onAdd(item)}
    >
      <MdShoppingBasket className="text-white" />
    </motion.div>
  );
};

export default AddToCart;
