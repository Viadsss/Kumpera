import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import PropTypes from "prop-types";

ChartJS.register(...registerables);

export default function PieChart({ chartData, remainingMoney }) {
  const needsTotal = chartData.reduce((sum, item) => sum + item.needs, 0);
  const wantsTotal = chartData.reduce((sum, item) => sum + item.wants, 0);
  const savingsTotal = chartData.reduce((sum, item) => sum + item.savings, 0);

  const total = needsTotal + wantsTotal + savingsTotal + remainingMoney;

  const pieData = {
    Needs: needsTotal,
    Wants: wantsTotal,
    Savings: savingsTotal,
    "Remaining Money": remainingMoney,
  };

  const colorsCategory = {
    Needs: "rgba(54, 162, 235, 0.8)", // Blue
    Wants: "rgba(255, 99, 132, 0.8)", // Red
    Savings: "rgba(255, 206, 86, 0.8)", // Yellow
    "Remaining Money": "rgba(75, 192, 192, 0.8)", // Green
  };

  const labels = Object.keys(pieData).filter((key) => pieData[key] !== 0);
  const values = labels.map((label) => pieData[label]);

  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: labels.map((label) => colorsCategory[label]),
        borderWidth: 5,
      },
    ],
  };

  const percentages = labels.map((label) => {
    const value = pieData[label];
    const percentage = ((value / total) * 100).toFixed(2);
    return `${label}: ${percentage}% (${value})`;
  });

  return (
    <div className="pieBox">
      <div className="pieChart">
        <Pie data={data} />
      </div>
      <div className="percentages">
        {percentages.map((percent, index) => (
          <div key={index}>{percent}</div>
        ))}
      </div>
    </div>
  );
}

PieChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  remainingMoney: PropTypes.number.isRequired,
};
