import HrmsAdminLayout from "../../../../../Layout/Hrms-admin-layout";
import { defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";
import "./Hrms-statistic.css";

import revenueData from "./data/chartData";
import sourceData from "./data/sourceData.json";
const HrmsStatistic = () => {
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  defaults.plugins.title.display = true;
  defaults.plugins.title.align = "start";
  defaults.plugins.title.font.size = 20;
  defaults.plugins.title.color = "black";
  return (
    <HrmsAdminLayout>
      <div className="container hrms-statistic mt-4">
        <div className="row">
          <div className=" col-lg-4">
            <div className="card m-0 mb-3 p-3 rounded-4 bg-light ">
              <Doughnut
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      labels: revenueData.map((data) => data.label),
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                      borderColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Revenue Sources",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card p-3 rounded-4 bg-light">
              <Line
                data={{
                  labels: revenueData.map((data) => data.label),
                  datasets: [
                    {
                      label: "Revenue",
                      data: revenueData.map((data) => data.revenue),
                      backgroundColor: "#064FF0",
                      borderColor: "#064FF0",
                    },
                    {
                      label: "Cost",
                      data: revenueData.map((data) => data.cost),
                      backgroundColor: "#FF3030",
                      borderColor: "#FF3030",
                    },
                  ],
                }}
                options={{
                  elements: {
                    line: {
                      tension: 0.5,
                    },
                  },
                  plugins: {
                    title: {
                      text: "Monthly Revenue & Cost",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 mb-3">
            <div className="card m-0 p-3 rounded-4 bg-light">
              <Bar
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: "Count",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                      borderRadius: 5,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Revenue Source",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="card p-3 rounded-4 bg-light">
              <Pie
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: "Count",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                      borderRadius: 5,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Revenue Source",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-3 rounded-4 bg-light">
              <PolarArea
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      labels: revenueData.map((data) => data.label),
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                      borderColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Revenue Sources",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </HrmsAdminLayout>
  );
};

export default HrmsStatistic;
