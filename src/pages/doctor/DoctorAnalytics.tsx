import DashboardLayout from "@/components/DashboardLayout";
import { BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const weeklyData = [
  { day: "Mon", analyzed: 5 },
  { day: "Tue", analyzed: 8 },
  { day: "Wed", analyzed: 3 },
  { day: "Thu", analyzed: 7 },
  { day: "Fri", analyzed: 6 },
];

const diagnosisData = [
  { name: "Anemia", value: 30 },
  { name: "Diabetes", value: 25 },
  { name: "Infections", value: 20 },
  { name: "Orthopedic", value: 15 },
  { name: "Other", value: 10 },
];

const COLORS = ["hsl(217 91% 60%)", "hsl(160 84% 39%)", "hsl(25 95% 53%)", "hsl(0 84% 60%)", "hsl(215 15% 50%)"];

const DoctorAnalytics = () => (
  <DashboardLayout role="doctor" userName="Dr. Sarah Chen">
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-primary" /> Analytics
      </h2>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="dashboard-section">
          <h3 className="text-base font-semibold text-foreground mb-4">Reports Analyzed This Week</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 90%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="analyzed" fill="hsl(217 91% 60%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-section">
          <h3 className="text-base font-semibold text-foreground mb-4">Diagnosis Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={diagnosisData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {diagnosisData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default DoctorAnalytics;
