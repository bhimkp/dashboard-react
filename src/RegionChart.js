import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

const options = {
  legend: {
    position: "right",
    display: true,
  },
  rotation: 0.7 * Math.PI,
  circumference: 1.6 * Math.PI,
};
const data = {
  //   labels: ["Excellent", "Very Good", "Good", "Average"],
  datasets: [
    {
      data: [22, 44],
      borderWidth: 10,
      //   radius: 200,
      //   innerRadius: 100,
      borderColor: "#3a3c42",
      //   borderColor: "#31353d",
      backgroundColor: ["#A4ACDC", "#6879E7"],
      //   hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

class RegionChart extends React.Component {
  displayName: "";

  render() {
    return (
      <div>
        <h2></h2>
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}

export default RegionChart;
