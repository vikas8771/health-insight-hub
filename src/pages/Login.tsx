import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Activity, Mail, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (role: string) => {
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">MedAnalysis</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground text-sm mt-1">Sign in to your account</p>
        </div>

        <div className="dashboard-section space-y-5">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="doctor@hospital.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <button
            onClick={() => handleLogin("patient")}
            className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Login
          </button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center"><span className="bg-card px-3 text-xs text-muted-foreground">Or login as</span></div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {(["patient", "doctor", "authority"] as const).map((role) => (
              <button
                key={role}
                onClick={() => handleLogin(role)}
                className="py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors capitalize"
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
