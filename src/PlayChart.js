import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

function PlayChart(props) {
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
    labels: ["No", "Maybe", "Yes"],
    datasets: [
      {
        data: props.play_data,
        borderWidth: 10,
        borderColor: "#3a3c42",
        // radius: "100%",
        // innerRadius: "100%",
        //   borderColor: "#31353d",
        backgroundColor: ["#452fd4", "#28abb0", "#439dde"],
        //   hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <h2></h2>
      <Doughnut data={data} options={options} width={400} height={270} />
    </div>
  );
}

export default PlayChart;
