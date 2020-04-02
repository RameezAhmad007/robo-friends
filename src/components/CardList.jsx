import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // if(true){
  //   throw new Error('nooooooooooo!')
  // }
  return (
    <div>
      {robots.map((res, i) => {
        return (
          <Card
          key={i}
            id={res.id}
            name={res.name}
            email={res.email}
            // id={robots[i].id}
            // name={robots[i].name}
            // email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
