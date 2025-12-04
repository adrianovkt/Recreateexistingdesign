import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight, Eye, EyeOff, User, CreditCard, Car, Heart } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import logoImage from 'figma:asset/b2f9edea3e52014a8b2b40fb13c9c4e0e5345fcb.png';

interface RegisterScreenProps {
  onBackToLogin: () => void;
}

export function RegisterScreen({ onBackToLogin }: RegisterScreenProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    email: '',
    password: '',
    vehicles: '',
    favoriteBrand: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular loading
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    // Aqui você poderia adicionar lógica de registro
    console.log('Registro:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Função para formatar CPF
  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    return value;
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    handleChange('cpf', formatted);
  };

  return (
    <div className="relative min-h-screen w-full overflow-y-auto bg-black">
      {/* Background com gradientes animados */}
      <div className="fixed inset-0">
        {/* Gradiente verde principal */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(126, 255, 108, 0.5) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Gradiente secundário */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(126, 255, 108, 0.4) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Gradiente terciário */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(126, 255, 108, 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Grid pattern sutil */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(126, 255, 108, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(126, 255, 108, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Conteúdo */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md"
        >
          {/* Card de Registro */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            {/* Brilho superior */}
            <div 
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(126, 255, 108, 0.5), transparent)',
              }}
            />

            {/* Conteúdo do card */}
            <div className="p-8">
              {/* Logo/Título */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center mb-8"
              >
                {/* Logo */}
                <motion.div
                  animate={{
                    filter: [
                      'drop-shadow(0 0 20px rgba(126, 255, 108, 0.6))',
                      'drop-shadow(0 0 40px rgba(126, 255, 108, 0.9))',
                      'drop-shadow(0 0 20px rgba(126, 255, 108, 0.6))',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="inline-block mb-4"
                >
                  <img 
                    src={logoImage} 
                    alt="Style Car Logo" 
                    className="w-20 h-20 mx-auto"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(87%) sepia(73%) saturate(459%) hue-rotate(37deg) brightness(104%) contrast(103%)',
                    }}
                  />
                </motion.div>
                <h1 className="text-white mb-2 font-f1 tracking-wider text-3xl">CREATE ACCOUNT</h1>
                <p className="text-white/60 font-google-sans">Join the Style Car community</p>
              </motion.div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome Completo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#7EFF6C] transition-colors z-10" />
                    <Input
                      type="text"
                      placeholder="Nome completo"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      required
                      className="pl-12 h-14 rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-[#7EFF6C]/50 focus:ring-2 focus:ring-[#7EFF6C]/20 transition-all"
                    />
                  </div>
                </motion.div>

                {/* CPF */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  <div className="relative group">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#7EFF6C] transition-colors z-10" />
                    <Input
                      type="text"
                      placeholder="CPF"
                      value={formData.cpf}
                      onChange={handleCPFChange}
                      required
                      maxLength={14}
                      className="pl-12 h-14 rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-[#7EFF6C]/50 focus:ring-2 focus:ring-[#7EFF6C]/20 transition-all"
                    />
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#7EFF6C] transition-colors z-10" />
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="pl-12 h-14 rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-[#7EFF6C]/50 focus:ring-2 focus:ring-[#7EFF6C]/20 transition-all"
                    />
                  </div>
                </motion.div>

                {/* Senha */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                >
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#7EFF6C] transition-colors z-10" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      required
                      className="pl-12 pr-12 h-14 rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-[#7EFF6C]/50 focus:ring-2 focus:ring-[#7EFF6C]/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors z-10"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Veículos que já possuiu */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="relative group">
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#7EFF6C] transition-colors z-10" />
                    <Input
                      type="text"
                      placeholder="Veículos que já possuiu (separados por vírgula)"
                      value={formData.vehicles}
                      onChange={(e) => handleChange('vehicles', e.target.value)}
                      className="pl-12 h-14 rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-[#7EFF6C]/50 focus:ring-2 focus:ring-[#7EFF6C]/20 transition-all"
                    />
                  </div>
                </motion.div>

                {/* Marca preferida */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                >
                  <div className="relative group">
                    <Heart className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#7EFF6C] transition-colors z-10" />
                    <Input
                      type="text"
                      placeholder="Marca preferida"
                      value={formData.favoriteBrand}
                      onChange={(e) => handleChange('favoriteBrand', e.target.value)}
                      className="pl-12 h-14 rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-[#7EFF6C]/50 focus:ring-2 focus:ring-[#7EFF6C]/20 transition-all"
                    />
                  </div>
                </motion.div>

                {/* Botão Registro */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 rounded-2xl relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(126, 255, 108, 0.9), rgba(126, 255, 108, 0.7))',
                      border: '1px solid rgba(126, 255, 108, 0.3)',
                      boxShadow: '0 0 20px rgba(126, 255, 108, 0.3)',
                    }}
                  >
                    {/* Efeito hover brilhante */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <span className="relative flex items-center justify-center gap-2 text-black">
                      {isLoading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                          />
                          Creating account...
                        </>
                      ) : (
                        <>
                          Create Account
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>

              {/* Sign In Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-center mt-6"
              >
                <p className="text-white/60 text-sm font-google-sans">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={onBackToLogin}
                    className="text-[#7EFF6C] hover:underline transition-all drop-shadow-[0_0_8px_rgba(126,255,108,0.6)]"
                  >
                    Sign in
                  </button>
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-6"
          >
            <p className="text-white/40 text-xs font-google-sans">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
