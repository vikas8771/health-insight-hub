import DashboardLayout from "@/components/DashboardLayout";
import { Upload, Pill } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const DoctorUpload = () => {
  const [medicines, setMedicines] = useState([{ name: "", dosage: "", instructions: "" }]);

  const addMedicine = () => setMedicines([...medicines, { name: "", dosage: "", instructions: "" }]);
  const updateMedicine = (i: number, field: string, value: string) => {
    const updated = [...medicines];
    (updated[i] as any)[field] = value;
    setMedicines(updated);
  };

  return (
    <DashboardLayout role="doctor" userName="Dr. Sarah Chen">
      <div className="space-y-6 max-w-2xl">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Upload className="w-6 h-6 text-primary" /> Upload Report & Prescribe
        </h2>

        <div className="dashboard-section space-y-4">
          <h3 className="font-semibold text-foreground">Upload Patient Report</h3>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Select Patient</label>
            <select className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              <option>John Doe</option><option>Emily Davis</option><option>Robert Brown</option>
            </select>
          </div>
          <div className="upload-zone">
            <Upload className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Drag & drop report file</p>
          </div>
          <button onClick={() => toast.success("Report uploaded!")} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm">Upload Report</button>
        </div>

        {/* Prescription */}
        <div className="dashboard-section space-y-4">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Pill className="w-5 h-5 text-medical-green" /> Add Prescription
          </h3>
          {medicines.map((med, i) => (
            <div key={i} className="grid grid-cols-3 gap-3">
              <input placeholder="Medicine Name" value={med.name} onChange={(e) => updateMedicine(i, "name", e.target.value)} className="px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input placeholder="Dosage" value={med.dosage} onChange={(e) => updateMedicine(i, "dosage", e.target.value)} className="px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input placeholder="Instructions" value={med.instructions} onChange={(e) => updateMedicine(i, "instructions", e.target.value)} className="px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          ))}
          <div className="flex gap-3">
            <button onClick={addMedicine} className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">+ Add Medicine</button>
            <button onClick={() => toast.success("Prescription saved!")} className="px-6 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm">Save Prescription</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorUpload;
