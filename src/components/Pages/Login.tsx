import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { login } from '@/api/AdminApi';
import { checkAuth } from '@/api/auth';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();

const checkAuthentication = async()=>{
 const Auth = await checkAuth();
 if(Auth.isAuthenticated){
  navigate('/dashboard')
 }
} 

  useEffect(()=>{
    checkAuthentication();
  },[]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!loading){
    setLoading(true);
    const response = await login(email, password);
    if (response.success) {
      navigate('/dashboard');
    } else {
      alert(response.message);
    }
    setLoading(false);
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center LoginBG  p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Enter Admin Email"
                    className="pl-10 w-full"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 w-full"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff size={18} aria-label="Hide password" />
                    ) : (
                      <Eye size={18} aria-label="Show password" />
                    )}
                  </button>
                </div>
              </div>
              <Button disabled={loading} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Log In
              </Button>
            </form>
          </div>
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Need help?
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
