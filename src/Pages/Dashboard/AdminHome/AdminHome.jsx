/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { FaBook, FaTruck, FaUsers, FaWallet } from "react-icons/fa";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  // custom shape for the bar chart
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom shape for the pie chart

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div>
      <Helmet>
        <title>Admin Home</title>
      </Helmet>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div className=" grid md:grid-cols-4 justify-center items-center gap-10  mt-6 ">
        <div className="flex justify-center items-center gap-6 bg-gradient-to-r from-purple-500 to-pink-200 w-full p-4 rounded-md shadow-lg">
          <div>
            <FaWallet className="text-4xl text-white"></FaWallet>
          </div>
          <div>
            <div className="text-3xl font-bold">${stats.revenue}</div>
            <div className="text-2xl">Revenue</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] w-full p-4 rounded-md shadow-lg">
          <div>
            <FaUsers className="text-4xl text-white"></FaUsers>
          </div>
          <div>
            <div className="text-3xl font-bold">${stats.users}</div>
            <div className="text-2xl">Customers</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] w-full p-4 rounded-md shadow-lg">
          <div>
            <FaBook className="text-4xl text-white"></FaBook>
          </div>
          <div>
            <div className="text-3xl font-bold">${stats.menuItems}</div>
            <div className="text-2xl">Products</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] w-full p-4 rounded-md shadow-lg">
          <div>
            <FaTruck className="text-4xl text-white"></FaTruck>
          </div>
          <div>
            <div className="text-3xl font-bold">${stats.orders}</div>
            <div className="text-2xl">Orders</div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
