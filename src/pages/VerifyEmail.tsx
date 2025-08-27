import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import HelpButton from "@/components/HelpButton";

export default function VerifyEmail() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyOtp, resendOtp } = useAuth();
  
  // Get email from navigation state
  const email = location.state?.email || "nome@email.com";

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      // Auto focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        nextInput?.focus();
      }

      // Auto submit when all fields are filled
      if (newCode.every(digit => digit !== "") && newCode[5] !== "") {
        handleVerifyCode(newCode.join(""));
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyCode = async (verificationCode?: string) => {
    const codeToVerify = verificationCode || code.join("");
    
    if (codeToVerify.length !== 6) {
      toast.error("Por favor, digite o código completo");
      return;
    }

    setLoading(true);

    try {
      const { error } = await verifyOtp(email, codeToVerify);
      
      if (error) {
        toast.error("Código inválido ou expirado");
        setCode(["", "", "", "", "", ""]);
        document.getElementById("code-input-0")?.focus();
      } else {
        toast.success("Email verificado com sucesso!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Erro ao verificar código");
      setCode(["", "", "", "", "", ""]);
      document.getElementById("code-input-0")?.focus();
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
        setCode(["", "", "", "", "", ""]);
        document.getElementById("code-input-0")?.focus();
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
    document.getElementById("code-input-0")?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/09b8c8b2251ba50585cbbd8ee69d204f9ad06348?width=240" 
          alt="Logo" 
          className="w-20 h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-lg w-full text-center space-y-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Confira seu email!
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-base mb-12">
            Enviamos um código de verificação no e-mail{" "}
            <br />
            <span className="font-bold text-gray-900">{email}</span>
          </p>

          {/* Code Input Fields */}
          <div className="flex justify-center gap-3 mb-16">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                disabled={loading}
                className="w-16 h-20 text-center text-2xl font-medium border-2 border-gray-300 rounded-2xl bg-white
                          focus:outline-none focus:border-orange-400 transition-colors duration-200
                          disabled:opacity-50 disabled:cursor-not-allowed"
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]*"
              />
            ))}
          </div>

          {/* Resend Button */}
          <div className="mb-8">
            <button
              onClick={handleResendCode}
              disabled={resending}
              className="w-full max-w-md mx-auto bg-[hsl(var(--verification-button))] hover:bg-[hsl(var(--verification-button))]/90 
                        text-[hsl(var(--verification-button-foreground))] font-medium py-4 px-8 rounded-2xl 
                        transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resending ? "Reenviando..." : "Reenviar código de verificação"}
            </button>
          </div>

          {/* Login Link */}
          <div>
            <p className="text-gray-600 text-base">
              Você já possui cadastro?{" "}
              <button
                onClick={handleLoginClick}
                className="text-[hsl(var(--verification-link))] font-medium hover:underline transition-all duration-200"
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