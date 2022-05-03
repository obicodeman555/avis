import React from "react";

import "./scrollToTop.scss";
const ScrollToTop = ({ showScrollBtn }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    // const target = e.target.getAttribute("href");
    const scrollLocation = Array.from(
      e.target.parentElement.parentElement.parentElement.children
    )[1].offsetTop;
    window.scrollTo({
      left: 0,
      top: scrollLocation - 73,
    });
    console.log(scrollLocation);
  };
  return (
    <div
      className={`${
        showScrollBtn ? "scrollToTop scrollToTop--active" : "scrollToTop"
      }`}
    >
      <a
        href="#avis__hero"
        className="hero__section__link"
        onClick={handleScroll}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 5V35M13.3333 11.6667L20 5L13.3333 11.6667ZM20 5L26.6667 11.6667L20 5Z"
            stroke="black"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default ScrollToTop;
