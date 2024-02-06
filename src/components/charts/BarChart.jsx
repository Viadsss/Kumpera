import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import PropTypes from "prop-types";

ChartJS.register(...registerables);

export default function BarChart({ chartData }) {
  const data = {
    labels: chartData.map((data) => "day " + data.day),
    datasets: [
      {
        label: "Needs",
        data: chartData.map((data) => data.needs),
        borderWidth: 2,
      },
      {
        label: "Wants",
        data: chartData.map((data) => data.wants),
        borderWidth: 2,
      },
      {
        label: "Savings",
        data: chartData.map((data) => data.savings),
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="barChart">
      <Bar data={data} />
    </div>
  );
}

BarChart.propTypes = {
  chartData: PropTypes.array.isRequired,
};
