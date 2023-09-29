import React from "react";
import * as C from "./styles";

import Google from "../../assets/google.svg";
import Netflix from "../../assets/netflix.svg";
import AirBnb from "../../assets/airbnb.svg";
import Amazon from "../../assets/amazon.svg";
import Facebook from "../../assets/facebook.svg";
import Grab from "../../assets/grab.svg";
const Enterprises = () => {
  return (
    <C.ContainerEnteprises>
      <C.TextEnterprises>
        Trusted by 5,000+ Companies Worldwide
      </C.TextEnterprises>
      <C.ContainerLogoEnterprises>
        <C.Enterprise src={Google} />
        <C.Enterprise src={Netflix} />
        <C.Enterprise src={AirBnb} />
        <C.Enterprise src={Amazon} relative={true}/>
        <C.Enterprise src={Facebook} />
        <C.Enterprise src={Grab} />
      </C.ContainerLogoEnterprises>
    </C.ContainerEnteprises>
  );
};

export default Enterprises;
