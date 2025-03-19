
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-secondary to-blue-50 p-4" style={{ direction: 'rtl' }}>
      <div className="text-center">
        <div className="mb-6 relative inline-block">
          <div className="text-[150px] md:text-[200px] font-bold text-primary/20">404</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl font-bold text-gray-900 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            الصفحة غير موجودة
          </div>
        </div>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها أو حذفها.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
        >
          <Home size={18} />
          <span>العودة للصفحة الرئيسية</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
