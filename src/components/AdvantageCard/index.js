import React from "react";

const AdvantageCard = (props) => {
  return (
    <section className="bg-[#333333] flex justify-between items-center w-3/4 my-2 rounded-sm md:mx-1 p-10 md:p-8 md text-white">
      <div className="  ">
      <i className={props.icon} style={{fontSize:'30px'  , color:'green'}}></i>
      </div>
      <div className="md:p-1 p-4">
        <h2 className="text-2xl font-bold md:text-xl">{props.title}</h2>
<p>{props.title}</p>
      </div>
    </section>
  );
};

export default AdvantageCard;
