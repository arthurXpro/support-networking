
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, User, BookOpen, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock data for articles
const articlesData = [
  {
    id: '1',
    title: 'الاندماج المجتمعي لذوي الاحتياجات الخاصة: تحديات وفرص',
    excerpt: 'نظرة شاملة على التحديات التي تواجه ذوي الاحتياجات الخاصة في سوريا والفرص المتاحة لتعزيز اندماجهم في المجتمع',
    author: 'د. سمير محمد',
    category: 'توعية مجتمعية',
    date: '02/04/2025',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    readTime: '8 دقائق'
  },
  {
    id: '2',
    title: 'التقنيات المساعدة الحديثة لذوي الإعاقة البصرية',
    excerpt: 'استعراض لأحدث التقنيات المساعدة التي تساهم في تحسين حياة الأشخاص ذوي الإعاقة البصرية وتعزيز استقلاليتهم',
    author: 'م. عمر حسن',
    category: 'تكنولوجيا',
    date: '01/04/2025',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    readTime: '6 دقائق'
  },
  {
    id: '3',
    title: 'حقوق الأشخاص ذوي الإعاقة في قانون العمل السوري',
    excerpt: 'تحليل للنصوص القانونية المتعلقة بحقوق الأشخاص ذوي الإعاقة في قانون العمل السوري وآليات تطبيقها',
    author: 'المحامية ليلى حسن',
    category: 'قانون وتشريعات',
    date: '30/03/2025',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    readTime: '10 دقائق'
  },
  {
    id: '4',
    title: 'التعليم الدامج: استراتيجيات وتطبيقات عملية',
    excerpt: 'دليل شامل حول استراتيجيات التعليم الدامج وكيفية تطبيقها في المدارس السورية لضمان تعليم متكافئ لجميع الطلاب',
    author: 'أ. فاطمة العلي',
    category: 'تعليم',
    date: '28/03/2025',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    readTime: '12 دقيقة'
  },
  {
    id: '5',
    title: 'الدعم النفسي للأطفال ذوي الاحتياجات الخاصة وأسرهم',
    excerpt: 'نصائح وإرشادات للتعامل مع التحديات النفسية التي تواجه الأطفال ذوي الاحتياجات الخاصة وأسرهم',
    author: 'د. رنا عباس',
    category: 'الصحة النفسية',
    date: '26/03/2025',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    readTime: '9 دقائق'
  },
  {
    id: '6',
    title: 'التأهيل المهني لذوي الاحتياجات الخاصة: الطريق نحو الاستقلالية',
    excerpt: 'كيف يمكن للتأهيل المهني أن يفتح آفاقاً جديدة للأشخاص ذوي الاحتياجات الخاصة ويمكنهم من الانخراط في سوق العمل',
    author: 'أ. محمد الخالدي',
    category: 'تأهيل مهني',
    date: '24/03/2025',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    readTime: '7 دقائق'
  }
];

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredArticles = articlesData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = ['توعية مجتمعية', 'تكنولوجيا', 'قانون وتشريعات', 'تعليم', 'الصحة النفسية', 'تأهيل مهني'];
  
  return (
    <div className="min-h-screen bg-gray-50" style={{ direction: 'rtl' }}>
      <div className="bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">المقالات والتوعية</h1>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              مقالات توعوية ومعلومات مفيدة حول مختلف الجوانب المتعلقة بذوي الاحتياجات الخاصة
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="ابحث في المقالات..."
                className="pl-10 py-6 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">المقالات والمدونات</h2>
            
            <TabsList>
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="توعية مجتمعية">توعية</TabsTrigger>
              <TabsTrigger value="تعليم">تعليم</TabsTrigger>
              <TabsTrigger value="الصحة النفسية">صحة نفسية</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">لا توجد مقالات تطابق معايير البحث</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  مسح عوامل التصفية
                </Button>
              </div>
            )}
          </TabsContent>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">لا توجد مقالات في هذا التصنيف</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            تحميل المزيد من المقالات
          </Button>
        </div>
        
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">هل لديك خبرة في مجال ذوي الاحتياجات الخاصة؟</h2>
              <p className="mt-2 text-gray-600">
                شارك خبراتك ومعرفتك من خلال كتابة مقالات توعوية، ونشرها عبر منصتنا للوصول إلى من يحتاجها.
              </p>
            </div>
            <Button size="lg" className="shrink-0">
              أرسل مقالك
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticleCard = ({ article }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <Badge className="mb-2">{article.category}</Badge>
        <Link to={`/articles/${article.id}`}>
          <h3 className="text-lg font-semibold line-clamp-2 hover:text-primary transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 mt-2 line-clamp-3 text-sm">
          {article.excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center">
          <User size={14} className="ml-1" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <Calendar size={14} className="ml-1" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center">
            <BookOpen size={14} className="ml-1" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticlesPage;
