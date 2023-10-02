import React from "react";
import * as C from "./styles";
import CardsMap from "./cards";

const Software = () => {
  return (
    <C.ContainerSoftware>
      <C.TittleSoftware>
        All-In-One <span> Cloud Software.</span>
      </C.TittleSoftware>
      <C.SubTittle>
        Skilline is one powerful online software suite that combines all the
        <br />
        tools needed to run a successful school or office.
      </C.SubTittle>
      <C.ContainerCards>
        {CardsMap.map((item, index) => {
          return (
            <C.Card>
              <C.ContainerIconCard color={item.color}>
                <C.IconCard
                  src={item.icon}
                  position={index == 1 ? true : false}
                />
              </C.ContainerIconCard>
              <C.TittleCard position={index == 2 ? true : false}>
                {item.tittle}
              </C.TittleCard>
              <C.TextCard>{item.text}</C.TextCard>
            </C.Card>
          );
        })}
      </C.ContainerCards>
    </C.ContainerSoftware>
  );
};

export default Software;
