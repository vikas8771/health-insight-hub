import DashboardLayout from "@/components/DashboardLayout";
import { Users } from "lucide-react";

const patients = [
  { id: "P001", name: "John Doe", age: 34, reports: 12, lastVisit: "2026-03-10" },
  { id: "P002", name: "Emily Davis", age: 28, reports: 5, lastVisit: "2026-03-08" },
  { id: "P003", name: "Robert Brown", age: 52, reports: 18, lastVisit: "2026-03-05" },
  { id: "P004", name: "Maria Garcia", age: 45, reports: 9, lastVisit: "2026-03-01" },
  { id: "P005", name: "David Kim", age: 61, reports: 22, lastVisit: "2026-02-28" },
];

const AuthorityPatients = () => (
  <DashboardLayout role="authority" userName="Admin">
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Users className="w-6 h-6 text-primary" /> All Patients
      </h2>
      <div className="dashboard-section overflow-x-auto">
        <table className="table-medical">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Age</th><th>Reports</th><th>Last Visit</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td className="text-muted-foreground">{p.id}</td>
                <td className="text-foreground font-medium">{p.name}</td>
                <td className="text-foreground">{p.age}</td>
                <td className="text-foreground">{p.reports}</td>
                <td className="text-foreground">{p.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default AuthorityPatients;
