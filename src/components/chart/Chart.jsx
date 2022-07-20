import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
const data = [
    {
      name: "Jan",
      "Active Customers": 4000,
    
    },
    {
      name: "Feb",
      "Active Customers": 2000,
    
    },
    {
      name: "Mar",
      "Active Customers": 4300,
    
    },
    {
      name: "Apr",
      "Active Customers": 3600,
    
    },
    {
      name: "May",
      "Active Customers": 2400,
    
    },
    {
      name: "June",
      "Active Customers": 4500,
    
    },
    {
      name: "July",
      "Active Customers": 8000,
    
    },
    {
      name: "Aug",
      "Active Customers": 6000,
    
    },
    {
      name: "Sep",
      "Active Customers": 5600,
    
    },
    {
      name: "Oct",
      "Active Customers": 9000,
    
    },
    {
      name: "Nov",
      "Active Customers": 4600,
    
    },
    {
      name: "Dec",
      "Active Customers": 6700,
    
    }];

export default function Chart() {
    
  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Data</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="green" />
          <Line type="monotone" dataKey="Active Customers" stroke="red" />
          <Tooltip/>
          <CartesianGrid stroke="yellow" strokeDasharray="5 5"/>
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
