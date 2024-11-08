import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, FileText, Users, Settings } from 'lucide-react';

export interface SidebarItem {
  name: string;
  icon: React.ReactNode;
}


const sidebarItems: SidebarItem[] = [
  { name: 'Dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { name: 'Resumes', icon: <FileText className="h-4 w-4" /> },
  { name: 'Users', icon: <Users className="h-4 w-4" /> },
  { name: 'Settings', icon: <Settings className="h-4 w-4" /> },
];

interface SidebarMenuProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const DashboardSidebar = ({ activePage, setActivePage }:SidebarMenuProps) => {
  
  return(
  <Sidebar>
    <SidebarHeader className="flex bg-primary_purple text-white items-center justify-between p-5">
      <h2 className="text-xl font-bold">Admin Panel</h2>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                  className={`py-5 mb-2 rounded-lg transition-colors hover:bg-primary_purple hover:text-white ${
                    activePage === item.name ? 'bg-primary_purple  text-white' : 'bg-transparent'
                  }`}
                  onClick={() => setActivePage(item.name)}
                >
                  <span className="flex items-center p-1">
                    <span className="mr-2 h-4 w-4">{item.icon}</span>
                    {item.name}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
);
}

export default DashboardSidebar;
