
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Check, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// بيانات الجمعيات (في تطبيق حقيقي ستكون من قاعدة البيانات)
const associationsData = [
  {
    id: 1,
    name: "جمعية رعاية ذوي الاحتياجات الخاصة",
    logo: "https://placehold.co/100x100",
    description: "جمعية متخصصة في تقديم خدمات تعليمية وتأهيلية متكاملة لذوي الاحتياجات الخاصة.",
    location: "الرياض",
    services: ["تعليمية", "طبية", "نفسية"],
    rating: 4.8,
    reviewsCount: 120,
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: "مركز الأمل للرعاية والتأهيل",
    logo: "https://placehold.co/100x100",
    description: "مركز متخصص في تقديم برامج تأهيلية وعلاجية متخصصة للأطفال ذوي الإعاقة.",
    location: "جدة",
    services: ["تأهيلية", "طبية", "اجتماعية"],
    rating: 4.5,
    reviewsCount: 95,
    verified: true,
    featured: false
  },
  {
    id: 3,
    name: "جمعية أسر ذوي الإعاقة",
    logo: "https://placehold.co/100x100",
    description: "جمعية تهدف إلى تمكين أسر ذوي الإعاقة وتقديم الدعم النفسي والاجتماعي لهم.",
    location: "الدمام",
    services: ["اجتماعية", "نفسية", "مادية"],
    rating: 4.7,
    reviewsCount: 80,
    verified: true,
    featured: true
  },
  {
    id: 4,
    name: "مؤسسة نور للخدمات التعليمية",
    logo: "https://placehold.co/100x100",
    description: "مؤسسة متخصصة في تطوير البرامج التعليمية المخصصة لذوي صعوبات التعلم.",
    location: "الرياض",
    services: ["تعليمية", "تدريبية"],
    rating: 4.4,
    reviewsCount: 65,
    verified: true,
    featured: false
  },
  {
    id: 5,
    name: "مركز إرادة للتأهيل الشامل",
    logo: "https://placehold.co/100x100",
    description: "مركز متخصص في التأهيل البدني والوظيفي لذوي الإعاقات الحركية والذهنية.",
    location: "مكة المكرمة",
    services: ["تأهيلية", "طبية", "رياضية"],
    rating: 4.9,
    reviewsCount: 110,
    verified: true,
    featured: true
  },
  {
    id: 6,
    name: "جمعية التوحد الخيرية",
    logo: "https://placehold.co/100x100",
    description: "جمعية متخصصة في تقديم الدعم للأطفال المصابين بالتوحد وأسرهم.",
    location: "الرياض",
    services: ["تعليمية", "نفسية", "تأهيلية"],
    rating: 4.6,
    reviewsCount: 88,
    verified: true,
    featured: false
  }
];

const AssociationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // تصفية الجمعيات بناءً على البحث
  const filteredAssociations = searchQuery 
    ? associationsData.filter(association => 
        association.name.includes(searchQuery) || 
        association.description.includes(searchQuery) ||
        association.location.includes(searchQuery) ||
        association.services.some(service => service.includes(searchQuery))
      )
    : associationsData;
  
  // الجمعيات المميزة
  const featuredAssociations = associationsData.filter(association => association.featured);
  
  return (
    <div className="font-sans" style={{ direction: 'rtl' }}>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary to-primary/80 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">الجمعيات والمراكز المتخصصة</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            اكتشف أفضل الجمعيات والمراكز المتخصصة في خدمة ذوي الاحتياجات الخاصة في مختلف مناطق المملكة
          </p>
          <div className="flex max-w-xl mx-auto bg-white/20 backdrop-blur-md p-1 rounded-full">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-3 text-white h-5 w-5" />
              <Input 
                className="pl-3 pr-10 bg-transparent border-0 text-white placeholder:text-white/70" 
                placeholder="ابحث عن جمعية أو مركز..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="rounded-full">بحث</Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all">
          <div className="flex justify-between items-center mb-8">
            <TabsList>
              <TabsTrigger value="all">جميع الجمعيات</TabsTrigger>
              <TabsTrigger value="featured">الجمعيات المميزة</TabsTrigger>
              <TabsTrigger value="nearby">الأقرب إليك</TabsTrigger>
            </TabsList>
            <p className="text-gray-500">إجمالي النتائج: {filteredAssociations.length}</p>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssociations.map((association) => (
                <AssociationCard key={association.id} association={association} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAssociations.map((association) => (
                <AssociationCard key={association.id} association={association} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nearby" className="mt-0">
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">يرجى السماح بالوصول إلى موقعك لعرض الجمعيات القريبة منك</p>
              <Button>تفعيل خدمة الموقع</Button>
            </div>
          </TabsContent>
        </Tabs>
        
        {filteredAssociations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">لم يتم العثور على نتائج مطابقة</p>
            <Button variant="outline" onClick={() => setSearchQuery("")}>مسح البحث</Button>
          </div>
        )}
      </div>
      
      {/* Join Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">هل أنت جمعية أو مركز متخصص؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            انضم إلى منصتنا وساهم في خدمة ذوي الاحتياجات الخاصة من خلال عرض خدماتك والوصول إلى المستفيدين في جميع أنحاء المملكة
          </p>
          <Button size="lg" className="rounded-full px-8">انضم كجهة خدمية</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const AssociationCard = ({ association }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            {/* يمكن استبدالها بصورة شعار الجمعية */}
            <span className="text-2xl font-bold text-primary">{association.name.charAt(0)}</span>
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-gray-900">{association.name}</h3>
              {association.verified && (
                <div className="mr-2 bg-blue-100 p-1 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="h-4 w-4 ml-1" />
              <span>{association.location}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{association.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {association.services.map((service, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex text-amber-500">
              <Star className="fill-current h-5 w-5" />
            </div>
            <span className="font-bold mx-1">{association.rating}</span>
            <span className="text-gray-500 text-sm">({association.reviewsCount} تقييم)</span>
          </div>
          
          <Link 
            to={`/associations/${association.id}`} 
            className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all"
          >
            <span>عرض التفاصيل</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssociationsPage;
