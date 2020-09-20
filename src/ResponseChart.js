import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

function ResponseChart(props) {
  const options = {
    responsive: false,
    maintainAspectRatio: true,
    legend: {
      position: "right",
      display: true,
    },
    plugins: {
      datalabels: {
        color: "white",
      },
    },
  };
  const data = {
    labels: ["Poor", "Average", "Good", "Very Good", "Excellent"],
    datasets: [
      {
        data: props.rating_arr,
        borderWidth: 10,
        borderColor: "#3a3c42",
        // radius: "100%",
        // innerRadius: "100%",
        //   borderColor: "#31353d",
        backgroundColor: [
          "#28abb0",
          "#8a4389",
          "#28abb0",
          "#342fb0",
          "#4527f3",
        ],
        //   hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} options={options} width={400} height={270} />
    </div>
  );
}

export default ResponseChart;
