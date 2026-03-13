import DashboardLayout from "@/components/DashboardLayout";
import { History } from "lucide-react";

const records = [
  { date: "2026-03-10", patient: "John Doe", diagnosis: "Iron Deficiency Anemia", test: "CBC", result: "Hb: 10.2 g/dL", medication: "Ferrous Sulfate 325mg" },
  { date: "2026-03-08", patient: "Emily Davis", diagnosis: "UTI", test: "Urinalysis", result: "WBC: High", medication: "Ciprofloxacin 500mg" },
  { date: "2026-03-05", patient: "Robert Brown", diagnosis: "Type 2 Diabetes", test: "HbA1c", result: "7.2%", medication: "Metformin 500mg" },
  { date: "2026-03-01", patient: "Maria Garcia", diagnosis: "Lumbar Disc Herniation", test: "MRI Lumbar", result: "L4-L5", medication: "Ibuprofen 400mg" },
];

const DoctorHistory = () => (
  <DashboardLayout role="doctor" userName="Dr. Sarah Chen">
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <History className="w-6 h-6 text-primary" /> Medical History
      </h2>
      <div className="dashboard-section overflow-x-auto">
        <table className="table-medical">
          <thead>
            <tr>
              <th>Date</th>
              <th>Patient</th>
              <th>Diagnosis</th>
              <th>Test</th>
              <th>Result</th>
              <th>Medication</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i}>
                <td className="text-foreground">{r.date}</td>
                <td className="text-foreground font-medium">{r.patient}</td>
                <td className="text-foreground">{r.diagnosis}</td>
                <td className="text-foreground">{r.test}</td>
                <td className="text-foreground">{r.result}</td>
                <td className="text-foreground">{r.medication}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default DoctorHistory;
