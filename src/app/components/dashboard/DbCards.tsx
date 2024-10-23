import React from "react";
import Card from "../common/KPICardsContainer";
import InterviewsIcon from "../../../../public/InterviewsIcon";
import JobsAssignedIcon from "../../../../public/JobsAssignedIcon";
import AssignmentIcon from "../../../../public/AssignmentIcon";
import SubmissionsIcon from "../../../../public/SubmissionsIcon";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Import icons for arrows

const StatCard = () => {
  const renderArrowAndText = (increase: boolean, percentage: number) => {
    return (
      <div className="flex items-center gap-2">
        {increase ? (
          <>
            <FaArrowUp className="text-green-500" />
            <span className="text-green-500">{percentage}% Increase</span>
          </>
        ) : (
          <>
            <FaArrowDown className="text-red-500" />
            <span className="text-red-500">{percentage}% Decrease</span>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8 xl:gap-10 mt-10">
      <Card
        title="Jobs Assigned Today"
        count={4}
        icon={<JobsAssignedIcon />}
        arrowAndText={renderArrowAndText(true, 6.7)}
      />
      <Card
        title="Total Submissions Today"
        count={2}
        icon={<SubmissionsIcon />}
        arrowAndText={renderArrowAndText(false, 6.7)}
      />
      <Card
        title="Interviews scheduled today"
        count={0}
        icon={<InterviewsIcon />}
        arrowAndText={renderArrowAndText(true, 6.7)}
      />
      <Card
        title="Assignment to Submission"
        count={2}
        icon={<AssignmentIcon />}
        arrowAndText={renderArrowAndText(false, 6.7)}
      />
    </div>
  );
};

export default StatCard;
