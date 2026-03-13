import DashboardLayout from "@/components/DashboardLayout";
import { Brain, Upload, Stethoscope, TestTube, Pill, StickyNote } from "lucide-react";
import { useState } from "react";

const DoctorAnalysis = () => {
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <DashboardLayout role="doctor" userName="Dr. Sarah Chen">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary" /> Medical Report NLP Analyzer
        </h2>

        <div className="dashboard-section space-y-4 max-w-2xl">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Select Patient</label>
            <select className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              <option>John Doe</option>
              <option>Emily Davis</option>
              <option>Robert Brown</option>
              <option>Maria Garcia</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Upload Medical Report (PDF/Image)</label>
            <div className="upload-zone">
              <Upload className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
              <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG</p>
            </div>
          </div>
          <button
            onClick={() => setAnalyzed(true)}
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Brain className="w-4 h-4" /> Analyze Report
          </button>
        </div>

        {analyzed && (
          <div className="grid sm:grid-cols-2 gap-4 animate-fade-in">
            {/* Diagnosis */}
            <div className="stat-card space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Stethoscope className="w-5 h-5" />
                <h3 className="font-semibold">Diagnosis</h3>
              </div>
              <div className="space-y-2">
                <div className="px-3 py-2 rounded-lg bg-medical-light-blue text-sm text-foreground">Iron Deficiency Anemia</div>
                <div className="px-3 py-2 rounded-lg bg-medical-light-blue text-sm text-foreground">Mild Fatigue Syndrome</div>
              </div>
            </div>

            {/* Test Results */}
            <div className="stat-card space-y-3">
              <div className="flex items-center gap-2 text-medical-orange">
                <TestTube className="w-5 h-5" />
                <h3 className="font-semibold text-foreground">Test Results</h3>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  ["Hemoglobin", "10.2 g/dL", "Low"],
                  ["RBC Count", "3.8 M/μL", "Low"],
                  ["WBC Count", "7,200 /μL", "Normal"],
                  ["Platelet Count", "250,000 /μL", "Normal"],
                ].map(([name, value, status]) => (
                  <div key={name} className="flex justify-between items-center px-3 py-2 rounded-lg bg-muted">
                    <span className="text-foreground">{name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{value}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        status === "Normal" ? "bg-medical-light-green text-medical-green" : "bg-medical-light-red text-medical-red"
                      }`}>{status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medications */}
            <div className="stat-card space-y-3">
              <div className="flex items-center gap-2 text-medical-green">
                <Pill className="w-5 h-5" />
                <h3 className="font-semibold text-foreground">Medications</h3>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  ["Ferrous Sulfate", "325mg", "Once daily with food"],
                  ["Vitamin C", "500mg", "Twice daily"],
                  ["Folic Acid", "1mg", "Once daily"],
                ].map(([name, dosage, instructions]) => (
                  <div key={name} className="px-3 py-2 rounded-lg bg-medical-light-green">
                    <p className="font-medium text-foreground">{name} — {dosage}</p>
                    <p className="text-muted-foreground text-xs">{instructions}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor Notes */}
            <div className="stat-card space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <StickyNote className="w-5 h-5" />
                <h3 className="font-semibold text-foreground">Doctor Notes</h3>
              </div>
              <p className="text-sm text-muted-foreground">Patient shows signs of iron deficiency anemia. Recommend dietary changes including iron-rich foods. Follow-up CBC in 4 weeks to assess response to treatment.</p>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DoctorAnalysis;
