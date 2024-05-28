import { InpContext } from "../store/input-context";
import { React, useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Colors } from "chart.js/auto";

export default function Result({ res }) {
  const inpCtx = useContext(InpContext);
  let amtInvested = inpCtx.investment;
  if (inpCtx.type === "SIP") {
    amtInvested = inpCtx.investment * inpCtx.tp * 12;
  }
  let interest = res - amtInvested;
  const data = {
    labels: ["Invested Amount", "Interest Earned"],
    datasets: [
      {
        label: ["Amount in ₹"],
        colors: "black",
        data: [amtInvested, interest],
        backgroundColor: ["#f44336", "#9c27b0"],
        borderColor: "#f44336",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: { color: "black" },
      },
      x: {
        ticks: { color: "black" },
      },
    },
  };

  const noZeroCondition =
    inpCtx.investment !== 0 && inpCtx.roi !== 0 && inpCtx.tp !== 0;

  return (
    <>
      {noZeroCondition ? (
        <div id="results">
          <h2>Results</h2>
          <div className="chartArea">
            <Bar data={data} options={options} />
          </div>
          <table>
            <tbody>
              <tr>
                <td>Type: {inpCtx.type}</td>
                <td>Invested Amount: ₹{amtInvested.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Interest Earned: ₹{interest.toLocaleString()}</td>
                <td>Total Amount: ₹{res.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div id="results">
          <p>Please refresh the page and enter non-zero values</p>
        </div>
      )}
    </>
  );
}
