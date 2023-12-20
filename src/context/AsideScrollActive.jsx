/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const AsideScrollActive = createContext(null);

export const AsideScrollActiveProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
  const { pathname } = useLocation();
  const location = useLocation();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, [pathname]);
  useEffect(() => {
    const elementId = location.hash.substring(1);
    scrollToElement(elementId);
  }, [location]);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <AsideScrollActive.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </AsideScrollActive.Provider>
  );
};
