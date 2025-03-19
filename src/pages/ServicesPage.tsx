
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { servicesData } from '../components/Services';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans" style={{ direction: 'rtl' }}>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary to-primary/80 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">خدماتنا المتخصصة</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            نقدم باقة متنوعة من الخدمات المتخصصة لذوي الاحتياجات الخاصة لضمان حصولهم على أفضل دعم ممكن
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-3 text-gray-500 h-5 w-5" />
              <Input 
                className="pr-10 bg-white/90 focus:bg-white" 
                placeholder="ابحث عن خدمة معينة..." 
              />
            </div>
            <Button variant="secondary" className="flex items-center gap-2">
              <Filter size={18} />
              <span>تصفية النتائج</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Filters Section */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <Label htmlFor="location">المنطقة</Label>
              <Select>
                <SelectTrigger id="location">
                  <SelectValue placeholder="اختر المنطقة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع المناطق</SelectItem>
                  <SelectItem value="riyadh">الرياض</SelectItem>
                  <SelectItem value="jeddah">جدة</SelectItem>
                  <SelectItem value="dammam">الدمام</SelectItem>
                  <SelectItem value="makkah">مكة المكرمة</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="disability-type">نوع الإعاقة</Label>
              <Select>
                <SelectTrigger id="disability-type">
                  <SelectValue placeholder="اختر نوع الإعاقة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الأنواع</SelectItem>
                  <SelectItem value="physical">حركية</SelectItem>
                  <SelectItem value="visual">بصرية</SelectItem>
                  <SelectItem value="hearing">سمعية</SelectItem>
                  <SelectItem value="mental">ذهنية</SelectItem>
                  <SelectItem value="learning">صعوبات تعلم</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="price-range">نطاق السعر</Label>
              <Slider defaultValue={[500]} max={1000} step={50} />
              <div className="flex justify-between text-sm text-gray-500">
                <span>مجاني</span>
                <span>1000 ريال</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="rating">التقييم</Label>
              <Select>
                <SelectTrigger id="rating">
                  <SelectValue placeholder="اختر التقييم" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع التقييمات</SelectItem>
                  <SelectItem value="5">5 نجوم</SelectItem>
                  <SelectItem value="4">4 نجوم وأعلى</SelectItem>
                  <SelectItem value="3">3 نجوم وأعلى</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Listing */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`h-3 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                      <div className="flex items-center text-amber-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star}>★</span>
                        ))}
                        <span className="text-gray-500 text-sm mr-2">(120 تقييم)</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-blue-100 text-primary px-3 py-1 rounded-full">تعليمية</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">الرياض</span>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">متاحة</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-primary font-bold">
                      200 ريال
                      <span className="text-gray-500 text-sm font-normal">/للجلسة</span>
                    </div>
                    <Link 
                      to={`/services/${service.id}`} 
                      className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all"
                    >
                      <span>التفاصيل</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="mx-auto">
              تحميل المزيد من الخدمات
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
