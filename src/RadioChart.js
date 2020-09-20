import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

const options = {
  legend: {
    position: "right",
    display: true,
  },
};
const data = {
  labels: ["Download", "Preview"],
  datasets: [
    {
      data: [64, 36],
      borderWidth: 10,
      //   radius: 200,
      //   innerRadius: 100,
      borderColor: "#3a3c42",
      //   borderColor: "#31353d",
      backgroundColor: ["#28abb0", "#439dde"],
      //   hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

class RadioChart extends React.Component {
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

export default RadioChart;
