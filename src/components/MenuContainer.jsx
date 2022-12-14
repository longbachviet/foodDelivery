import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  return (
    <section className="w-full my-6 " id="menu">
      <div className="w-full flex flex-col items-center justify-center ">
        <p
          className="text-2xl font-semibold capitalize relative  before:absolute before:rounded-lg before:content before:w-32 before:h-1
        before:-bottom-2 before:left-8 before:bg-gradient-to-tr from-orange-100 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our Hot Dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none ">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-red-500" : "bg-white"
                } bg-white w-24 min-w-[94px] h-28 cursor-pointer rounded-lg shadow-lg drop-shadow-xl flex flex-col gap-3 
            items-center justify-center hover:bg-red-700 `}
                onClick={() => setFilter(category.urlParamName)}>
                <div
                  className={` w-10 h-10 rounded-full 
                  ${
                    filter === category.urlParamName
                      ? "bg-red-200"
                      : "bg-red-500"
                  } group-hover:bg-red-200 flex items-center justify-center `}>
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-black"
                        : "text-white"
                    } group-hover:text-black text-lg`}
                  />
                </div>
                <p
                  className={` text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-black"
                  } group-hover:text-white   `}>
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full "></div>
      </div>
    </section>
  );
};

export default MenuContainer;
