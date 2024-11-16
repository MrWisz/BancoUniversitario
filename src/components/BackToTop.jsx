import { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: ${(props) => (props.isNearFooter ? `230px` : "210px")}; /* Ajustar la posición del botón */
  right: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #085f63;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s, bottom 0.3s;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  &:hover {
    opacity: 0.8;
  }
`;

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsNearFooter(footerRect.top < windowHeight - 200); // Ajustar la posición del botón
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button show={showButton} isNearFooter={isNearFooter} onClick={scrollToTop}>
      ↑ 
    </Button>
  );
};

export default BackToTop;