import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../Data";
// import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";

Chart.register(CategoryScale);
 
export default function ChartBar() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#20ff00",
          "red",
          "#ffe600",
          "#4ca2ff",
          "purple"
        ],
        borderRadius: '5'
        // borderColor: "#e0e6ed",
        // borderWidth: 2
      }
    ]
  });
 
  return (
      <BarChart chartData={chartData} />
  );
}