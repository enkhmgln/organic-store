import React from "react";
import AdvantageCard from "../AdvantageCard";

const Advantage = () => {
  return (
    <section className="bg-[#111111] flex flex-col md:flex-row justify-between items-center h-50 md:py-14 py-4 md:px-2">
      <AdvantageCard 
      icon = "fa-solid fa-truck"
      title = 'Үнэгүй хүргэлт'
      />
      <AdvantageCard
      icon = 'fa-solid fa-recycle'
      title= '100% органик'
      />
      <AdvantageCard 
      icon = 'fa-solid fa-right-left'
      title = 'Буцаах боломжтой '
      />
      <AdvantageCard 
      icon = 'fa-solid fa-check'
      title = 'Ихийг хэмнэ'
      />
    </section>
  );
};

export default Advantage;
