import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import "./Accordion.css";

export const Accordion = ({ List }) => {
  const [openId, setId] = useState(null);

  return (
    <ul className="accordion">
      {List.map((Item, id) => {
        return (
          <AccordionItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            Item={Item}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
};
