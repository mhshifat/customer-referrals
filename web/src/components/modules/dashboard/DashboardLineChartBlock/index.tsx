'use client';
import { Poppins } from "next/font/google";
import classes from "./DashboardLineChartBlock.module.scss";
import Select from "@/components/ui/Select/Select";
import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DisableArea from "@/components/partials/DisableArea/DisableArea";

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function DashboardLineChartBlock() {
  return (
    <div className={classes.DashboardLineChartBlock}>
      <div className={classes.DashboardLineChartBlock__Header}>
        <h3 className={poppins.className}>Revenue Growth</h3>

        <Select
          placeholder="Last 30 days"
          options={[
            { label: "Last 30 days", value: "last-30-days" },
          ]}
        />
      </div>

      <DisableArea text="No Data">
        <div className={classes.DashboardLineChartBlock__Chart}>
          <ResponsiveContainer width="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="var(--secondary-clr)" />
              <YAxis stroke="var(--secondary-clr)" />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="var(--primary-clr)" strokeWidth={2} fill="var(--primary-clr)" fillOpacity={.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </DisableArea>
    </div>
  )
}