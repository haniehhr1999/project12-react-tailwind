import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../Data";

import PieChart from "../components/PieChart";

Chart.register(CategoryScale);
 
export default function ChartPie() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#A76F6F",
          "#FCAEAE",
          "#FF8989",
          "#FF6666",
          "#FFEADD",
        ],
        borderColor: "#3e4b61",
        borderWidth: 1
      }
    ]
  });
 
  return (
    <div className="ChartPie">
      <PieChart chartData={chartData} />
    </div>
  );
}
