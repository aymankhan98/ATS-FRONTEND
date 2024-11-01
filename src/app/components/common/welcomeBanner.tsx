import React from "react";
import WavingHand from "../../../../public/WavingHand";

interface WelcomeBannerProps {
  name: string;
  greeting: string;
  message: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  name,
  greeting,
  message,
}) => {
  return (
    <div className="flex gap-[10px] items-start ">
      <span className="text-2xl">
        <WavingHand />
      </span>
      <div>
        <h1 className="text-[20px] font-semibold text-[#0B1215]">
          {greeting}, {name}
        </h1>
        <p className="text-[13px] font-[400] text-gray-600 pt-[10px]">
          {message}
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
