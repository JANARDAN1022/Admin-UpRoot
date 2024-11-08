import { Bell, ChevronDown, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { SidebarTrigger } from '../ui/sidebar';
import { logout } from '@/api/AdminApi';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  activePage: string;
}



const Header = ({ activePage }:HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = async(e:any)=>{
    e.preventDefault();
    const response = await logout();
    if (response.success) {
      navigate('/'); 
    } else {
      alert(response.message);
    }
  }
  return(
    <header className="flex items-center justify-between p-4 bg-primary_purple text-white border-b">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="mr-2">
        <SidebarTrigger>
        <Menu className="h-5 w-5" />
        </SidebarTrigger>
        </Button>
        <h1 className="text-xl font-semibold">{activePage}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
          <Input type="search" placeholder="Search..." className="pl-8 pr-4 w-64 border-white text-white placeholder:text-white outline-none focus:outline-none focus-visible:ring-0" />
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex bg-white text-black items-center space-x-2">
              <Avatar className="h-8 w-8 text-black">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span>Admin</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className=''>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <Button className='bg-primary_purple hover:bg-primary_purple opacity-90 hover:opacity-100 flex w-full justify-center' onClick={handleLogout}>
            Logout
             </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
  
}

export default Header