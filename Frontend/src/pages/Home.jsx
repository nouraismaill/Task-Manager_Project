import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div class="bg-[#d1fae5] px-6 pt-[65px] pb-[140px] text-center text-surface dark:bg-neutral-700 dark:text-white ">
        <h1 class="mb-6 text-5xl font-bold">Welcome To Task Manager App</h1>
        <h3 class="mb-8 text-3xl font-bold">join Now to manage your tasks</h3>
        <div className="flex justify-center mt-[70px] mb-0  ">
          <NavLink to="/login">
            <button class="button  ">
              <div class="line one">
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
              </div>
              <div class="line two">
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
              </div>
              <div class="line three">
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
              </div>
              <div class="line four">
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
              </div>

              <div class="line five">
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
              </div>

              <div class="line six">
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
              </div>

              <div class="line seven">
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
              </div>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
