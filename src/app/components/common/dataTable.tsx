"use client";

import * as React from "react";

import AchievementBadge from "../../../../public/AchievementBadge";
import AchievementBadge2 from "../../../../public/AchievementBadge2";
import AchievementBadge3 from "../../../../public/AchievementBadge3";

// Types for the data
type Recruiter = {
  id: number;
  name: string;
  submissions: number;
  rank: number;
  status: "gold" | "silver" | "bronze" | "default";
};

const recruiters: Recruiter[] = [
  { id: 1, name: "Davis Curtis", submissions: 35, rank: 1, status: "gold" },
  { id: 2, name: "Alena Dorin", submissions: 33, rank: 2, status: "silver" },
  { id: 3, name: "Madelyn Dias", submissions: 30, rank: 3, status: "bronze" },
  { id: 4, name: "Zain Vaccaro", submissions: 28, rank: 4, status: "default" },
  { id: 5, name: "John Craig", submissions: 27, rank: 5, status: "default" },
  {
    id: 6,
    name: "Sophia Mitchell",
    submissions: 26,
    rank: 6,
    status: "default",
  },
];

// Function to get the correct SVG avatar component based on status
const getAvatarComponent = (status: string) => {
  switch (status) {
    case "gold":
      return <AchievementBadge />;
    case "silver":
      return <AchievementBadge2 />;
    case "bronze":
      return <AchievementBadge3 />;
    default:
      return null;
  }
};

const RecruiterRow = ({ recruiter }: { recruiter: Recruiter }) => {
  const hasBadge = recruiter.rank <= 3;
  return (
    <div className="p-2 border-b border-gray-200 last:border-none">
      <div className="   space-x-4">
        <div className="flex flex-row justify-between">
          <div className="flex gap-5">
            <div className="font-bold text-lg">{recruiter.rank}</div>
            <div>
              <div className="font-medium">{recruiter.name}</div>

              <div className="text-sm text-gray-500">
                {recruiter.submissions} Submissions
              </div>
            </div>
          </div>
          <div className="w-8 h-8">
            {hasBadge ? getAvatarComponent(recruiter.status) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const Leaderboard = () => {
  return (
    <div className="bg-white p-4 w-[500px] border-[2px] border-[#ECEEF6] ">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Top Recruiters by Submissions</h2>
        <button className="px-2 py-1 bg-gray-200 text-sm rounded-md">
          Today
        </button>
      </div>
      <div className="mt-4 space-y-2">
        {recruiters.map((recruiter) => (
          <RecruiterRow key={recruiter.id} recruiter={recruiter} />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="">
      <Leaderboard />
    </div>
  );
}
