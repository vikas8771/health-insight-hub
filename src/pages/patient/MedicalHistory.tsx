import DashboardLayout from "@/components/DashboardLayout";
import { History, Eye } from "lucide-react";
import { useState } from "react";

const records = [
  { date: "2026-03-10", diagnosis: "Iron Deficiency Anemia", test: "CBC", result: "Hb: 10.2 g/dL (Low)", medication: "Ferrous Sulfate 325mg", doctor: "Dr. Sarah Chen" },
  { date: "2026-03-05", diagnosis: "Normal - No Fracture", test: "Chest X-Ray", result: "Clear", medication: "None", doctor: "Dr. James Wilson" },
  { date: "2026-02-28", diagnosis: "Lumbar Disc Herniation", test: "MRI Lumbar", result: "L4-L5 Herniation", medication: "Ibuprofen 400mg", doctor: "Dr. Sarah Chen" },
  { date: "2026-02-15", diagnosis: "Urinary Tract Infection", test: "Urinalysis", result: "WBC: High, Nitrites: Positive", medication: "Ciprofloxacin 500mg", doctor: "Dr. Priya Sharma" },
  { date: "2026-01-20", diagnosis: "Type 2 Diabetes", test: "HbA1c", result: "7.2% (Elevated)", medication: "Metformin 500mg", doctor: "Dr. Sarah Chen" },
];

const MedicalHistory = () => {
  const [selectedRecord, setSelectedRecord] = useState<typeof records[0] | null>(null);

  return (
    <DashboardLayout role="patient" userName="John Doe">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <History className="w-6 h-6 text-primary" /> Medical History
        </h2>

        <div className="dashboard-section overflow-x-auto">
          <table className="table-medical">
            <thead>
              <tr>
                <th>Report Date</th>
                <th>Diagnosis</th>
                <th>Test Name</th>
                <th>Test Result</th>
                <th>Medication</th>
                <th>Doctor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td className="text-foreground">{r.date}</td>
                  <td className="text-foreground font-medium">{r.diagnosis}</td>
                  <td className="text-foreground">{r.test}</td>
                  <td className="text-foreground">{r.result}</td>
                  <td className="text-foreground">{r.medication}</td>
                  <td className="text-foreground">{r.doctor}</td>
                  <td>
                    <button onClick={() => setSelectedRecord(r)} className="text-primary hover:underline text-sm flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail Modal */}
        {selectedRecord && (
          <div className="fixed inset-0 bg-foreground/30 flex items-center justify-center z-50 p-6" onClick={() => setSelectedRecord(null)}>
            <div className="bg-card rounded-2xl p-6 max-w-lg w-full space-y-4 animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-foreground">Report Details</h3>
              {[
                ["Date", selectedRecord.date],
                ["Diagnosis", selectedRecord.diagnosis],
                ["Test", selectedRecord.test],
                ["Result", selectedRecord.result],
                ["Medication", selectedRecord.medication],
                ["Doctor", selectedRecord.doctor],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-border pb-2">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
              <button onClick={() => setSelectedRecord(null)} className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MedicalHistory;
