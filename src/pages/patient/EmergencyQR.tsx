import DashboardLayout from "@/components/DashboardLayout";
import { QrCode, Phone } from "lucide-react";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const EmergencyQR = () => {
  const [contact1, setContact1] = useState("+1 (555) 123-4567");
  const [contact2, setContact2] = useState("+1 (555) 987-6543");
  const [generated, setGenerated] = useState(false);

  const qrData = JSON.stringify({
    type: "EMERGENCY_CONTACT",
    contacts: [contact1, contact2],
  });

  return (
    <DashboardLayout role="patient" userName="John Doe">
      <div className="space-y-6 max-w-2xl">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <QrCode className="w-6 h-6 text-primary" /> Emergency QR Health Tag
        </h2>

        <div className="dashboard-section space-y-4">
          <p className="text-sm text-muted-foreground">Generate a QR code containing only your emergency contact numbers. No personal or medical data is included.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Emergency Contact 1</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input value={contact1} onChange={(e) => setContact1(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Emergency Contact 2</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input value={contact2} onChange={(e) => setContact2(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
          </div>
          <button onClick={() => setGenerated(true)} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Generate QR Code
          </button>
        </div>

        {generated && (
          <div className="dashboard-section flex flex-col items-center gap-4 animate-fade-in">
            <h3 className="text-lg font-semibold text-foreground">Your Emergency QR Code</h3>
            <div className="p-4 bg-card rounded-2xl border border-border">
              <QRCodeSVG value={qrData} size={200} level="H" />
            </div>
            <p className="text-xs text-muted-foreground text-center max-w-xs">
              This QR code contains only emergency contact numbers. No patient name, medical history, or personal data is stored.
            </p>
            <div className="flex gap-3">
              <a href={`tel:${contact1}`} className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Contact 1
              </a>
              <a href={`tel:${contact2}`} className="px-4 py-2 rounded-lg border border-accent text-accent text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Contact 2
              </a>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default EmergencyQR;
