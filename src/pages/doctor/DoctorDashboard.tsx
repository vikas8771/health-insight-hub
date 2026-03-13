import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Users, FileText, CheckCircle, Eye } from "lucide-react";

const patients = [
  { name: "John Doe", age: 34, diagnosis: "Iron Deficiency Anemia" },
  { name: "Emily Davis", age: 28, diagnosis: "Urinary Tract Infection" },
  { name: "Robert Brown", age: 52, diagnosis: "Type 2 Diabetes" },
  { name: "Maria Garcia", age: 45, diagnosis: "Lumbar Disc Herniation" },
  { name: "David Kim", age: 61, diagnosis: "Hypertension" },
];

const DoctorDashboard = () => (
  <DashboardLayout role="doctor" userName="Dr. Sarah Chen">
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Doctor Dashboard</h2>

      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard icon={Users} label="Total Patients" value={124} variant="blue" />
        <StatCard icon={FileText} label="Reports Pending" value={8} variant="orange" />
        <StatCard icon={CheckCircle} label="Reports Analyzed" value={342} variant="green" />
      </div>

      <div className="dashboard-section">
        <h3 className="text-lg font-semibold text-foreground mb-4">Patient List</h3>
        <div className="overflow-x-auto">
          <table className="table-medical">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Last Diagnosis</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p, i) => (
                <tr key={i}>
                  <td className="text-foreground font-medium">{p.name}</td>
                  <td className="text-foreground">{p.age}</td>
                  <td className="text-foreground">{p.diagnosis}</td>
                  <td>
                    <button className="px-3 py-1.5 rounded-lg border border-primary text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1">
                      <Eye className="w-3 h-3" /> View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default DoctorDashboard;
