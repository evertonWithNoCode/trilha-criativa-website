import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import HelpButton from "@/components/HelpButton";
import { BackgroundDecoration } from "@/components/BackgroundDecoration";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function VerifyEmail() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyOtp, resendOtp } = useAuth();
  
  // Get email from navigation state
  const email = location.state?.email || "nome@email.com";

  const handleCodeChange = (value: string) => {
    setCode(value);
    
    // Auto submit when all fields are filled
    if (value.length === 6) {
      handleVerifyCode(value);
    }
  };

  const handleVerifyCode = async (verificationCode?: string) => {
    const codeToVerify = verificationCode || code;
    
    if (codeToVerify.length !== 6) {
      toast.error("Por favor, digite o código completo");
      return;
    }

    setLoading(true);

    try {
      const { error } = await verifyOtp(email, codeToVerify);
      
      if (error) {
        toast.error("Código inválido ou expirado");
        setCode("");
      } else {
        toast.success("Email verificado com sucesso!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Erro ao verificar código");
      setCode("");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setResending(true);
    
    try {
      const { error } = await resendOtp(email);
      
      if (error) {
        toast.error("Erro ao reenviar código");
      } else {
        toast.success("Código reenviado com sucesso!");
        setCode("");
      }
    } catch (error) {
      toast.error("Erro ao reenviar código");
    } finally {
      setResending(false);
    }
  };

  const handleLoginClick = () => {
    navigate("/");
  };

  // Auto focus first input on mount
  useEffect(() => {
    // InputOTP handles focus automatically
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted relative overflow-hidden">
      <BackgroundDecoration />
      
      {/* Logo */}
      <div className="absolute top-8 left-8 md:top-10 md:left-10">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/09b8c8b2251ba50585cbbd8ee69d204f9ad06348?width=240" 
          alt="Logo" 
          className="w-24 h-auto md:w-32"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="max-w-lg w-full text-center space-y-6 md:space-y-8">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Confira seu email!
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Enviamos um código de verificação no e-mail{" "}
            <span className="font-bold text-foreground">{email}</span>
          </p>

          {/* Code Input Fields */}
          <div className="flex justify-center mt-8 md:mt-12">
            <InputOTP 
              maxLength={6} 
              value={code} 
              onChange={handleCodeChange}
              disabled={loading}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="w-12 h-16 md:w-16 md:h-20 text-xl md:text-2xl font-semibold border-2 border-border rounded-xl bg-background" />
                <InputOTPSlot index={1} className="w-12 h-16 md:w-16 md:h-20 text-xl md:text-2xl font-semibold border-2 border-border rounded-xl bg-background" />
                <InputOTPSlot index={2} className="w-12 h-16 md:w-16 md:h-20 text-xl md:text-2xl font-semibold border-2 border-border rounded-xl bg-background" />
                <InputOTPSlot index={3} className="w-12 h-16 md:w-16 md:h-20 text-xl md:text-2xl font-semibold border-2 border-border rounded-xl bg-background" />
                <InputOTPSlot index={4} className="w-12 h-16 md:w-16 md:h-20 text-xl md:text-2xl font-semibold border-2 border-border rounded-xl bg-background" />
                <InputOTPSlot index={5} className="w-12 h-16 md:w-16 md:h-20 text-xl md:text-2xl font-semibold border-2 border-border rounded-xl bg-background" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Manual Verify Button (if needed) */}
          {code.length === 6 && !loading && (
            <button
              onClick={() => handleVerifyCode()}
              disabled={loading}
              className="w-full max-w-md mx-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Verificando..." : "Verificar código"}
            </button>
          )}

          {/* Resend Button */}
          <div className="mt-8 md:mt-12">
            <button
              onClick={handleResendCode}
              disabled={resending}
              className="w-full max-w-md mx-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 px-6 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resending ? "Reenviando..." : "Reenviar código de verificação"}
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-6 md:mt-8">
            <p className="text-sm md:text-base text-muted-foreground">
              Você já possui cadastro?{" "}
              <button
                onClick={handleLoginClick}
                className="text-primary font-bold hover:text-primary/80 transition-colors duration-200"
              >
                Faça login
              </button>
            </p>
          </div>
        </div>
      </div>

      <HelpButton />
    </div>
  );
}