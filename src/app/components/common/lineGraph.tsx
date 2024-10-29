"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { DatePickerWithRange } from "./calender";

const data = [
  { time: "6 PM", value: 45 },
  { time: "7 PM", value: 65 },
  { time: "8 PM", value: 70 },
  { time: "9 PM", value: 65 },
  { time: "10 PM", value: 50 },
  { time: "11 PM", value: 35 },
  { time: "12 AM", value: 30 },
  { time: "1 AM", value: 45 },
  { time: "2 AM", value: 55 },
  { time: "3 AM", value: 52 },
];

const TimeSeriesChart = () => {
  return (
    <div className="  col-start-1 col-end-3  justify-start p-4 border-[2px] border-[#ECEEF6]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold mb-1">
            Average Time to Fill Positions
          </h2>
          <p className="text-sm text-gray-500">June 4, 2024</p>
        </div>
        <DatePickerWithRange />
      </div>
      <LineChart width={1000} height={300} data={data} className="">
        <CartesianGrid horizontal={true} vertical={false} stroke="#f0f0f0" />
        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          stroke="#666"
          fontSize={12}
        />
        <YAxis hide={true} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
        <Line
          type="natural"
          dataKey="value"
          stroke="#1a73e8"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
      <div className="mt-4">
        <p className="text-sm text-green-500 flex items-center mt-[46px]">
          <span className="mr-1">↗</span>
          Trending up by 5.2% this month
        </p>
        <p className="text-sm text-gray-500">
          Showing total visitors for the last 1 year
        </p>
      </div>
    </div>
  );
};

export default TimeSeriesChart;
