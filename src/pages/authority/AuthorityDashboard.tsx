import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Users, FileText, CheckCircle, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const monthlyData = [
  { month: "Oct", cases: 120 },
  { month: "Nov", cases: 145 },
  { month: "Dec", cases: 165 },
  { month: "Jan", cases: 135 },
  { month: "Feb", cases: 190 },
  { month: "Mar", cases: 160 },
];

const diseaseData = [
  { month: "Oct", diabetes: 30, anemia: 25, infections: 40, cardiac: 15 },
  { month: "Nov", diabetes: 35, anemia: 28, infections: 45, cardiac: 20 },
  { month: "Dec", diabetes: 40, anemia: 30, infections: 50, cardiac: 22 },
  { month: "Jan", diabetes: 32, anemia: 22, infections: 38, cardiac: 18 },
  { month: "Feb", diabetes: 45, anemia: 35, infections: 55, cardiac: 25 },
  { month: "Mar", diabetes: 38, anemia: 28, infections: 42, cardiac: 20 },
];

const reportAnalysis = [
  { name: "Analyzed", value: 850 },
  { name: "Pending", value: 120 },
  { name: "Failed", value: 30 },
];

const COLORS = ["hsl(160 84% 39%)", "hsl(25 95% 53%)", "hsl(0 84% 60%)"];

const AuthorityDashboard = () => (
  <DashboardLayout role="authority" userName="Admin">
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Authority Dashboard</h2>

      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard icon={Users} label="Total Patients" value="1,247" variant="blue" />
        <StatCard icon={FileText} label="Reports Uploaded" value="3,892" variant="orange" />
        <StatCard icon={CheckCircle} label="Reports Analyzed" value="3,542" variant="green" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="dashboard-section">
          <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" /> Disease Trend
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={diseaseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="diabetes" stroke="hsl(217 91% 60%)" strokeWidth={2} name="Diabetes" />
              <Line type="monotone" dataKey="anemia" stroke="hsl(160 84% 39%)" strokeWidth={2} name="Anemia" />
              <Line type="monotone" dataKey="infections" stroke="hsl(25 95% 53%)" strokeWidth={2} name="Infections" />
              <Line type="monotone" dataKey="cardiac" stroke="hsl(0 84% 60%)" strokeWidth={2} name="Cardiac" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-section">
          <h3 className="text-base font-semibold text-foreground mb-4">Monthly Cases</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="cases" fill="hsl(217 91% 60%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-section lg:col-span-2">
          <h3 className="text-base font-semibold text-foreground mb-4">Report Analysis Status</h3>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie data={reportAnalysis} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {reportAnalysis.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {reportAnalysis.map((item, i) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-sm text-foreground">{item.name}: <strong>{item.value}</strong></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default AuthorityDashboard;
