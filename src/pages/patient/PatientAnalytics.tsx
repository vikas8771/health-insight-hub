import DashboardLayout from "@/components/DashboardLayout";
import { BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const monthlyData = [
  { month: "Oct", reports: 2 },
  { month: "Nov", reports: 1 },
  { month: "Dec", reports: 3 },
  { month: "Jan", reports: 2 },
  { month: "Feb", reports: 4 },
  { month: "Mar", reports: 1 },
];

const healthData = [
  { month: "Oct", hb: 11.5, sugar: 110 },
  { month: "Nov", hb: 11.0, sugar: 115 },
  { month: "Dec", hb: 10.8, sugar: 120 },
  { month: "Jan", hb: 10.5, sugar: 125 },
  { month: "Feb", hb: 10.2, sugar: 130 },
  { month: "Mar", hb: 11.0, sugar: 118 },
];

const PatientAnalytics = () => (
  <DashboardLayout role="patient" userName="John Doe">
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-primary" /> My Analytics
      </h2>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="dashboard-section">
          <h3 className="text-base font-semibold text-foreground mb-4">Monthly Reports</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="reports" fill="hsl(217 91% 60%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-section">
          <h3 className="text-base font-semibold text-foreground mb-4">Health Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={healthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="hb" stroke="hsl(217 91% 60%)" strokeWidth={2} name="Hemoglobin" />
              <Line type="monotone" dataKey="sugar" stroke="hsl(160 84% 39%)" strokeWidth={2} name="Blood Sugar" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default PatientAnalytics;
