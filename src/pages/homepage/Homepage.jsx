import React, { useState, useRef, useEffect } from "react";
import { Header, Footer, ScrollToTop } from "../../components";
import "./homepage.scss";
import Hero from "./components/hero/Hero";
import BrillantFeatures from "./components/brillantFeatures/BrillantFeatures";

const Homepage = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const heroRef = useRef(null);
  // const homeMainRef = useRef(null);

  useEffect(() => {
    if (heroRef?.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              setShowScrollBtn(true);
            } else {
              setShowScrollBtn(false);
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(heroRef.current);
    }
  }, [showScrollBtn]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setStickyHeader(true);
          } else {
            setStickyHeader(false);
          }
        });

        // console.log(entries);
      },
      { threshold: 0.15 }
    );

    observer.observe(heroRef.current);
  }, [stickyHeader]);

  // const []
  return (
    <main className="avis__homepage">
      <Header stickyHeader={stickyHeader} />
      <Hero ref={heroRef} />

      <BrillantFeatures />

      <Footer />

      <ScrollToTop showScrollBtn={showScrollBtn} />
    </main>
  );
};

export default Homepage;
