import React from "react";

interface CardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  arrowAndText: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, count, icon, arrowAndText }) => {
  return (
    <div className="bg-white p-4 rounded-[7px] flex flex-col sm:flex-row justify-between items-start gap-4 w-full max-w-md mx-auto border-[2px] border-[#ECEEF6]  ">
      <div className="flex flex-col items-start justify-center text-center sm:text-left">
        <h3 className="text-[13px] font-semibold text-[#777777] uppercase">
          {title}
        </h3>
        <p className="text-[24px] font-semibold pt-[8px] pb-[25px]">{count}</p>
        {arrowAndText}
      </div>
      <div className="icon text-4xl text-center sm:text-right">{icon}</div>
    </div>
  );
};

export default Card;
