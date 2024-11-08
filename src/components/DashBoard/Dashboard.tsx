import { useEffect, useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import SidebarMenu from '../SideBar/SideBar';
import Header from '../Header/Header';
import DashboardContent from '../DashBoard/DashboardContent';
import ResumesContent from '../Resume/ResumeContent';
import UsersContent from '../UserTable/UserContent';
import SettingsContent from '../Settings/SettingsContent';
import { checkAuth } from '@/api/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState<string>('Dashboard');
  const navigate = useNavigate();

  const checkAuthentication = async()=>{
    const Auth = await checkAuth();
    if(!Auth.isAuthenticated){
     console.log(Auth);
     navigate('/')
    }else{
     console.log(Auth)
    }
   } 
   
     useEffect(()=>{
       checkAuthentication();
     },[]);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen bg-gray-100">
        <SidebarMenu activePage={activePage} setActivePage={setActivePage} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header activePage={activePage} />
          <main className="flex-1 overflow-y-auto p-6">
            {activePage === 'Dashboard' && <DashboardContent />}
            {activePage === 'Resumes' && <ResumesContent />}
            {activePage === 'Users' && <UsersContent />}
            {activePage === 'Settings' && <SettingsContent />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
