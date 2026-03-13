import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { FileText, Stethoscope, Pill, Upload, ChevronRight } from "lucide-react";
import { useState } from "react";

const recentReports = [
  { date: "2026-03-10", type: "Blood Test", doctor: "Dr. Sarah Chen", status: "Analyzed" },
  { date: "2026-03-05", type: "X-Ray", doctor: "Dr. James Wilson", status: "Pending" },
  { date: "2026-02-28", type: "MRI Scan", doctor: "Dr. Sarah Chen", status: "Analyzed" },
  { date: "2026-02-15", type: "Urine Test", doctor: "Dr. Priya Sharma", status: "Analyzed" },
];

const PatientDashboard = () => {
  const [dragOver, setDragOver] = useState(false);

  return (
    <DashboardLayout role="patient" userName="John Doe">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Patient Dashboard</h2>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <StatCard icon={FileText} label="Total Reports" value={12} variant="blue" />
          <StatCard icon={Stethoscope} label="Last Diagnosis" value="Healthy" variant="green" />
          <StatCard icon={Pill} label="Active Prescriptions" value={3} variant="orange" />
        </div>

        {/* Upload */}
        <div className="dashboard-section">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5 text-primary" /> Upload Medical Report
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Report Type</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Blood Test</option>
                <option>X-Ray</option>
                <option>MRI Scan</option>
                <option>CT Scan</option>
                <option>Urine Test</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Upload File</label>
              <div
                className={`upload-zone ${dragOver ? "border-primary/60 bg-primary/5" : ""}`}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={() => setDragOver(false)}
              >
                <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG (max 10MB)</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Upload Report
          </button>
        </div>

        {/* Recent Reports */}
        <div className="dashboard-section">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Reports</h3>
          <div className="overflow-x-auto">
            <table className="table-medical">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Report Type</th>
                  <th>Doctor</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map((r, i) => (
                  <tr key={i}>
                    <td className="text-foreground">{r.date}</td>
                    <td className="text-foreground">{r.type}</td>
                    <td className="text-foreground">{r.doctor}</td>
                    <td>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        r.status === "Analyzed"
                          ? "bg-medical-light-green text-medical-green"
                          : "bg-medical-light-orange text-medical-orange"
                      }`}>
                        {r.status}
                      </span>
                    </td>
                    <td><ChevronRight className="w-4 h-4 text-muted-foreground" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;
