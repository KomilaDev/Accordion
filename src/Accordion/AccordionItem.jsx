import React, { useRef } from "react";
import { ReactComponent as ArrowIcon } from "../arrow-icon.svg";

export const AccordionItem = ({ Item, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        {Item.header}
        <ArrowIcon className={`accordion-arrow ${isOpen ? "active" : ""}`} />
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {Item.body}
        </div>
      </div>
    </li>
  );
};
