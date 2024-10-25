import Image from "next/image";
import React from "react";
import { useBoolean } from "usehooks-ts";

const NavbarBottom = () => {
  const { toggle } = useBoolean(false);

  return (
    <div className="w-full h-16 bg-[#363BC9] flex items-center justify-between px-6 ">
      <button
        onClick={() => toggle()}
        className="h-full flex items-center justify-center transition-all duration-500 ease-in-out text-white font-medium"
      >
        <Image
          width={16}
          height={16}
          src="/CollapseIcon.png"
          alt=""
          className={`object-contain transition-all duration-500 ease-in-out transform`}
        />
      </button>
    </div>
  );
};

export default NavbarBottom;
