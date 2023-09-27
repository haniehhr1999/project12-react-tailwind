import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../Data";
import LineChart from "./LineChart";

Chart.register(CategoryScale);
 
export default function ChartLine() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "red",
          "lime",
          "blue",
          "yellow"
        ],
        borderColor: "#e0e6ed",
        borderWidth: 1
      }
    ]
  });
 
  return (
      <LineChart chartData={chartData} />
  );
}