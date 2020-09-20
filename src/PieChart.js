import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

import "chartjs-plugin-datalabels";
function PieChart(props) {
  const options = {
    responsive: false,
    maintainAspectRatio: true,
    legend: {
      position: "right",
      display: false,
    },
    plugins: {
      datalabels: {
        color: "white",
        formatter: function (value, context) {
          return value + "%";
        },
      },
    },
  };
  const data = {
    labels: props.mix_downloads,
    datasets: [
      {
        data: props.percent,
        borderWidth: 10,
        borderColor: "#3a3c42",
        radius: "100%",
        innerRadius: "100%",
        //   borderColor: "#31353d",
        backgroundColor: [
          "#974182",
          "#B457B1",
          "#4173C5",
          "#7ea7c2",
          "#322680",
          "#3d318f",
          "#604196",
          "#6f4da8",
          "#7046b8",
          "#8a4389",
        ],
        //   hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
    // text: "%",
  };
  return (
    <div>
      {<Doughnut data={data} options={options} width={500} height={500} />}
    </div>
  );
}

export default PieChart;
