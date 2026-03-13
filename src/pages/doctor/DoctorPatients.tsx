import DashboardLayout from "@/components/DashboardLayout";
import { Users, Eye } from "lucide-react";

const patients = [
  { name: "John Doe", age: 34, diagnosis: "Iron Deficiency Anemia", reports: 12 },
  { name: "Emily Davis", age: 28, diagnosis: "Urinary Tract Infection", reports: 5 },
  { name: "Robert Brown", age: 52, diagnosis: "Type 2 Diabetes", reports: 18 },
  { name: "Maria Garcia", age: 45, diagnosis: "Lumbar Disc Herniation", reports: 9 },
  { name: "David Kim", age: 61, diagnosis: "Hypertension", reports: 22 },
  { name: "Lisa Wang", age: 38, diagnosis: "Thyroid Disorder", reports: 7 },
];

const DoctorPatients = () => (
  <DashboardLayout role="doctor" userName="Dr. Sarah Chen">
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Users className="w-6 h-6 text-primary" /> Patients
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((p, i) => (
          <div key={i} className="stat-card space-y-3 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-medical-light-blue text-primary flex items-center justify-center font-semibold text-sm">
                {p.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{p.name}</p>
                <p className="text-xs text-muted-foreground">Age: {p.age}</p>
              </div>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">Last Diagnosis</p>
              <p className="font-medium text-foreground">{p.diagnosis}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">{p.reports} reports</span>
              <button className="px-3 py-1.5 rounded-lg border border-primary text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1">
                <Eye className="w-3 h-3" /> View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default DoctorPatients;
