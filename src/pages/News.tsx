import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// بيانات الأخبار التجريبية
const newsMockData = [
  {
    id: 1,
    title: "مبادرة وطنية لدعم ذوي الاحتياجات الخاصة في مجال التوظيف",
    category: "مبادرات",
    image: "https://placehold.co/600x400",
    date: "15 يونيو 2023",
    author: "محمد العبدالله",
    readTime: "5 دقائق",
    excerpt: "أعلنت وزارة الموارد البشرية والتنمية الاجتماعية عن إطلاق مبادرة وطنية جديدة تهدف إلى دعم توظيف الأشخاص ذوي الإعاقة في القطاع الخاص، من خلال تقديم حوافز للشركات."
  },
  {
    id: 2,
    title: "افتتاح مركز متخصص لتأهيل الأطفال ذوي اضطراب التوحد في الرياض",
    category: "مراكز",
    image: "https://placehold.co/600x400",
    date: "8 يونيو 2023",
    author: "سارة المالكي",
    readTime: "4 دقائق",
    excerpt: "تم افتتاح مركز متخصص جديد في مدينة الرياض لتأهيل الأطفال ذوي اضطراب التوحد باستخدام أحدث الأساليب العلاجية العالمية، ويوفر المركز برامج شاملة للتدخل المبكر."
  },
  {
    id: 3,
    title: "تطبيق تقنية الواقع الافتراضي في تأهيل ذوي الإعاقة الحركية",
    category: "تكنولوجيا",
    image: "https://placehold.co/600x400",
    date: "1 يونيو 2023",
    author: "فيصل العتيبي",
    readTime: "6 دقائق",
    excerpt: "أظهرت دراسة حديثة فعالية استخدام تقنية الواقع الافتراضي في برامج إعادة التأهيل الحركي للأشخاص ذوي الإعاقة الحركية، مما يتيح لهم فرصة التدريب في بيئات افتراضية آمنة."
  },
  {
    id: 4,
    title: "ختام فعاليات المؤتمر الدولي الرابع لذوي الاحتياجات الخاصة",
    category: "فعاليات",
    image: "https://placehold.co/600x400",
    date: "25 مايو 2023",
    author: "ليلى الزهراني",
    readTime: "7 دقائق",
    excerpt: "اختتمت فعاليات المؤتمر الدولي الرابع لذوي الاحتياجات الخاصة الذي أقيم في جدة، وناقش أحدث المستجدات في مجال رعاية وتأهيل ذوي الاحتياجات الخاصة بمشاركة خبراء دوليين ومحليين."
  },
  {
    id: 5,
    title: "برنامج تدريبي جديد لتأهيل معلمي التربية الخاصة",
    category: "تعليم",
    image: "https://placehold.co/600x400",
    date: "18 مايو 2023",
    author: "عبدالرحمن الشمري",
    readTime: "5 دقائق",
    excerpt: "أطلقت وزارة التعليم بالتعاون مع مؤسسات متخصصة برنامجاً تدريبياً شاملاً لتأهيل معلمي التربية الخاصة وتزويدهم بأحدث المهارات والأساليب التعليمية المتقدمة."
  },
  {
    id: 6,
    title: "جمعية \"نماء\" تطلق حملة للتوعية بحقوق ذوي الإعاقة",
    category: "توعية",
    image: "https://placehold.co/600x400",
    date: "10 مايو 2023",
    author: "هند القحطاني",
    readTime: "4 دقائق",
    excerpt: "أطلقت جمعية \"نماء\" الخيرية حملة توعوية واسعة النطاق حول حقوق الأشخاص ذوي الإعاقة في المجتمع، تستهدف مختلف شرائح المجتمع وتسعى لنشر ثقافة الدمج والمساواة."
  }
];

const News = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState(newsMockData);
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Filter news based on search term
    if (searchTerm) {
      const filtered = newsMockData.filter(news => 
        news.title.includes(searchTerm) || 
        news.excerpt.includes(searchTerm) ||
        news.category.includes(searchTerm)
      );
      setFilteredNews(filtered);
    } else {
      setFilteredNews(newsMockData);
    }
  }, [searchTerm]);
  
  const handleNewsClick = (id: number) => {
    // في تطبيق حقيقي، سننتقل إلى صفحة تفاصيل الخبر
    navigate(`/news/${id}`);
  };
  
  return (
    <div className="font-sans" style={{ direction: 'rtl' }}>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">أخبار ومستجدات ذوي الاحتياجات الخاصة</h1>
            <p className="text-lg opacity-90 mb-8">آخر الأخبار والمقالات والتطورات في مجال رعاية ودعم ذوي الاحتياجات الخاصة</p>
            
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="ابحث في الأخبار..."
                className="w-full pl-4 pr-12 py-3 rounded-full border-0 shadow-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      {/* News Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="all">
          <div className="flex justify-center mb-10">
            <TabsList>
              <TabsTrigger value="all">جميع الأخبار</TabsTrigger>
              <TabsTrigger value="initiatives">مبادرات</TabsTrigger>
              <TabsTrigger value="centers">مراكز</TabsTrigger>
              <TabsTrigger value="events">فعاليات</TabsTrigger>
              <TabsTrigger value="education">تعليم</TabsTrigger>
              <TabsTrigger value="technology">تكنولوجيا</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.length > 0 ? (
                filteredNews.map(news => (
                  <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNewsClick(news.id)}>
                    <div className="relative h-48">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                        {news.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{news.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center ml-4">
                          <Calendar className="h-4 w-4 ml-1" />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 ml-1" />
                          <span>{news.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4 pt-4 border-t text-sm">
                        <User className="h-4 w-4 ml-1 text-gray-500" />
                        <span>{news.author}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl text-gray-500">لم يتم العثور على أخبار مطابقة للبحث</p>
                  <Button variant="outline" className="mt-4" onClick={() => setSearchTerm('')}>عرض جميع الأخبار</Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* Content for other tabs - in a real app these would filter by category */}
          <TabsContent value="initiatives">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews
                .filter(news => news.category === "مبادرات")
                .map(news => (
                  <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNewsClick(news.id)}>
                    <div className="relative h-48">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                        {news.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{news.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center ml-4">
                          <Calendar className="h-4 w-4 ml-1" />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 ml-1" />
                          <span>{news.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4 pt-4 border-t text-sm">
                        <User className="h-4 w-4 ml-1 text-gray-500" />
                        <span>{news.author}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          {/* يمكن تكرار نفس المحتوى لباقي التبويبات مع تغيير الفلتر */}
          <TabsContent value="centers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews
                .filter(news => news.category === "مراكز")
                .map(news => (
                  <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNewsClick(news.id)}>
                    <div className="relative h-48">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                        {news.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{news.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center ml-4">
                          <Calendar className="h-4 w-4 ml-1" />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 ml-1" />
                          <span>{news.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4 pt-4 border-t text-sm">
                        <User className="h-4 w-4 ml-1 text-gray-500" />
                        <span>{news.author}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          {/* باقي التبويبات ستكون مشابهة، لكن أضفنا هذين فقط كمثال */}
        </Tabs>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>السابق</Button>
            <Button variant="outline" size="sm" className="bg-primary text-white">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">التالي</Button>
          </div>
        </div>
      </div>
      
      {/* Subscribe Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">اشترك في النشرة الإخبارية</h2>
            <p className="text-gray-600 mb-6">احصل على آخر المستجدات والأخبار في مجال رعاية ذوي الاحتياجات الخاصة</p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 px-4 py-3 rounded-md border"
              />
              <Button>اشتراك</Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
