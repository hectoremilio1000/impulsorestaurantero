import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={`${styles.containerAbout}`}>
      <div className="max-w-[1300px] mx-auto px-[20px]">
        <div className="w-full flex justify-end">
          <div className="box shadow-2xl md:w-1/2 bg-white border-[1px] border-[#e5e5e5] rounded-[1.2em] p-8 md:py-16 md:px-16 flex flex-col gap-4">
            <h1 className=" title2-tw text-center mb-2 text-clip">About</h1>
            <h1 className=" titlebanner-tw text-center mb-8">GYM LAUNCH</h1>
            <p className="title4-tw">
              Gym Launch is a movement for all gym owners to reach more people,
              change more lives, and build wildly profitable businesses.
            </p>
            <p className="title4-tw">
              Founded in 2016 by gym owners, we've worked with over 5,000 gyms
              across 22 countries, creating over one hundred $1M/yr gyms and
              helping thousands of gym owners take home $100,000/yr or more.
              We've accomplished this through our proprietary Expert Coaching
              and Education model.
            </p>
            <div className="grid grid-cols-4 gap-2 items-start">
              <div>
                <h1 className="text-principal font-bold title1-tw">5K+</h1>
                <p className="font-bold title4-tw">Owners</p>
              </div>
              <div>
                <h1 className="text-principal font-bold title1-tw">5K+</h1>
                <p className="font-bold title4-tw">Owners</p>
              </div>
              <div>
                <h1 className="text-principal font-bold title1-tw">5K+</h1>
                <p className="font-bold title4-tw">Owners</p>
              </div>
              <div>
                <h1 className="text-principal font-bold title1-tw">5K+</h1>
                <p className="font-bold title4-tw">Owners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
