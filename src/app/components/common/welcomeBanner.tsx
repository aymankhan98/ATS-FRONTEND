import React from "react";

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
    <div className="flex items-center space-x-4 p-4">
      {/* Icon */}
      <span className="text-2xl">👋</span>

      {/* Content */}
      <div>
        <h1 className="text-lg font-semibold text-gray-900">
          {greeting}, {name}
        </h1>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
