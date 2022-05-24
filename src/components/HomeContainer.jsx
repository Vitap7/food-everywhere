import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-2" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div
          className="flex items-center gap-2 justify-center bg-orange-100
        px-4 py-1 rounded-full"
        >
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-textColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p
          className="text-base text-textColor text-center mgd:text-left
        md:w-[80%]"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg"
        >
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <div className="w-full flex items-center justify-center relative">
          <img
            src={HeroBg}
            className="ml-auto h-420 w-full lg:w-auto lg:h-650"
            alt="hero-Bg"
          />
        </div>

        <div className="w-full h-full absolute top-0 left-0 flex flex-wrap items-center justify-center xl:px-32 py-4 gap-4">
          {heroData &&
            heroData.map((item) => (
              <div
                key={item.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center font-semibold drop-shadow-lg"
              >
                <img
                  src={item.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="i1"
                />
                <p className="text-base lg:text-lg text-textColor mt-2 lg:mt-4">
                  {item.name}
                </p>
                <p className="my-1 lg:my-3 text-[12px] lg:text-sm text-lighttextGray">
                  {item.decp}
                </p>
                <p className="text-headingColor">
                  <span className="text-sm text-red-600">￥</span> {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
