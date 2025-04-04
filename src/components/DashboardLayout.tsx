
import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

interface DashboardLayoutProps {
  children: ReactNode;
  userType: 'beneficiary' | 'association' | 'admin';
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    // In a real app, this would clear authentication state
    toast({
      title: "تم تسجيل الخروج بنجاح",
      description: "نأمل أن نراك مرة أخرى قريباً",
    });
    navigate('/login');
  };

  // Define navigation based on user type
  const getNavigation = () => {
    if (userType === 'beneficiary') {
      return [
        { name: 'لوحة التحكم', href: '/profile', icon: 'home' },
        { name: 'خدماتي', href: '/profile/my-services', icon: 'clipboard' },
        { name: 'طلباتي', href: '/profile/requests', icon: 'list' },
        { name: 'قصص نجاح', href: '/profile/success-stories', icon: 'heart' },
        { name: 'الإعدادات', href: '/profile/settings', icon: 'settings' },
      ];
    } else if (userType === 'association') {
      return [
        { name: 'لوحة التحكم', href: '/association-dashboard', icon: 'home' },
        { name: 'خدماتنا', href: '/association-dashboard/services', icon: 'clipboard' },
        { name: 'الطلبات الواردة', href: '/association-dashboard/requests', icon: 'inbox' },
        { name: 'الفعاليات', href: '/association-dashboard/events', icon: 'calendar' },
        { name: 'إعلانات التوظيف', href: '/association-dashboard/jobs', icon: 'briefcase' },
        { name: 'الإعدادات', href: '/association-dashboard/settings', icon: 'settings' },
      ];
    } else {
      return [
        { name: 'لوحة التحكم', href: '/admin', icon: 'home' },
        { name: 'المستخدمين', href: '/admin/users', icon: 'users' },
        { name: 'الجمعيات', href: '/admin/associations', icon: 'building' },
        { name: 'الخدمات', href: '/admin/services', icon: 'clipboard' },
        { name: 'طلبات التسجيل', href: '/admin/registration-requests', icon: 'file-text' },
        { name: 'المقالات', href: '/admin/articles', icon: 'file-text' },
        { name: 'قصص النجاح', href: '/admin/success-stories', icon: 'heart' },
        { name: 'الإعدادات', href: '/admin/settings', icon: 'settings' },
      ];
    }
  };

  const navigation = getNavigation();

  return (
    <div className="min-h-screen bg-gray-50" style={{ direction: 'rtl' }}>
      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75" 
          onClick={() => setSidebarOpen(false)}
        ></div>
        
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 left-0 -mr-12 pt-2">
            <button
              type="button"
              className="mr-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">إغلاق القائمة</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <Logo size="small" withText={true} />
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary hover:bg-secondary hover:text-accent"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <Button 
              variant="ghost" 
              className="flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 hover:text-red-700 w-full"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              <span>تسجيل الخروج</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-l">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 mb-5">
              <Logo size="medium" withText={true} />
            </div>
            <nav className="mt-5 flex-1 px-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-primary hover:bg-secondary hover:text-accent"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <Button 
              variant="ghost" 
              className="flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 hover:text-red-700 w-full"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              <span>تسجيل الخروج</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="md:pr-64">
        <div className="sticky top-0 z-10 md:hidden bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">فتح القائمة</span>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1 flex justify-center">
            <Logo size="small" withText={false} />
          </div>
          <div className="w-6"></div> {/* Spacer to center logo */}
        </div>

        <main className="py-6 px-4 sm:px-6 md:py-8 md:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
