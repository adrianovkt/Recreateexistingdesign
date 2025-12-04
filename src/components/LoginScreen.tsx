import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import logoImage from 'figma:asset/b2f9edea3e52014a8b2b40fb13c9c4e0e5345fcb.png';

interface LoginScreenProps {
  onSignUp: () => void;
}

export function LoginScreen({ onSignUp }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular loading
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    // Aqui você poderia adicionar lógica de autenticação
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background com gradientes animados */}
      <div className="absolute inset-0">
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
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(126, 255, 108, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(126, 255, 108, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Conteúdo */}
      <div className="relative h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md"
        >
          {/* Card de Login */}
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
                <h1 className="text-white mb-2 font-f1 tracking-wider text-3xl">STYLE CAR</h1>
                <p className="text-white/60 font-google-sans">Sign in to continue</p>
              </motion.div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#7EFF6C] transition-colors z-10" />
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-12 h-14 rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-[#7EFF6C]/50 focus:ring-2 focus:ring-[#7EFF6C]/20 transition-all"
                    />
                  </div>
                </motion.div>

                {/* Campo Senha */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#7EFF6C] transition-colors z-10" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                {/* Forgot Password */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex justify-end"
                >
                  <button
                    type="button"
                    className="text-sm text-white/60 hover:text-[#7EFF6C] transition-colors"
                  >
                    Forgot password?
                  </button>
                </motion.div>

                {/* Botão Login */}
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
                          Signing in...
                        </>
                      ) : (
                        <>
                          Sign In
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="relative my-6"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 text-white/40 bg-black font-google-sans">or continue with</span>
                </div>
              </motion.div>

              {/* Social Login */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="grid grid-cols-2 gap-3"
              >
                <button
                  type="button"
                  className="h-12 rounded-xl flex items-center justify-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      className="text-white"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      className="text-white"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      className="text-white"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      className="text-white"
                    />
                  </svg>
                  <span className="text-white text-sm">Google</span>
                </button>

                <button
                  type="button"
                  className="h-12 rounded-xl flex items-center justify-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span className="text-white text-sm">GitHub</span>
                </button>
              </motion.div>

              {/* Sign Up Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-center mt-6"
              >
                <p className="text-white/60 text-sm font-google-sans">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={onSignUp}
                    className="text-[#7EFF6C] hover:underline transition-all drop-shadow-[0_0_8px_rgba(126,255,108,0.6)]"
                  >
                    Sign up
                  </button>
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
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