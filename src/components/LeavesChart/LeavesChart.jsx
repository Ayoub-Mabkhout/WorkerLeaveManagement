import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  ArcElement
} from "chart.js";
import theme from "../../theme";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  ArcElement
);

export default function LeavesChart({ leaves }) {
  const data = {
    labels: ["Days taken, Days remaining"],
    datasets: [
      {
        data: [28, 7],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.secondary.main
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1
    // any other options you want to include
  };
  return (
    <div style={{ height: "100%" }}>
      <h2>Leave Days Balance</h2>
      <div style={{ height: "60%", width: "60%" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
