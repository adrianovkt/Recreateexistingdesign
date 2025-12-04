import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';

export default function LoginSTC() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      {isRegistering ? (
        <RegisterScreen onBackToLogin={() => setIsRegistering(false)} />
      ) : (
        <LoginScreen onSignUp={() => setIsRegistering(true)} />
      )}
    </div>
  );
}
