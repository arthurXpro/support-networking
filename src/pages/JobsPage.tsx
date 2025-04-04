
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Briefcase, Building2, MapPin, Calendar, Search, Filter } from 'lucide-react';

// Mock data for job listings
const jobsData = [
  {
    id: '1',
    title: 'أخصائي علاج طبيعي',
    association: {
      id: '1',
      name: 'مركز الأمل للرعاية',
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    },
    location: 'دمشق - المزة',
    jobType: 'دوام كامل',
    category: 'طبية',
    description: 'نبحث عن أخصائي علاج طبيعي للعمل مع ذوي الاحتياجات الخاصة، يفضل من لديه خبرة سابقة في العمل مع الأطفال.',
    requirements: [
      'شهادة في العلاج الطبيعي',
      'خبرة لا تقل عن سنتين',
      'القدرة على التعامل مع ذوي الاحتياجات الخاصة'
    ],
    salary: '350,000 - 500,000 ل.س',
    postedDate: '02/04/2025',
    disabilityTypes: ['حركية', 'متلازمة داون', 'توحد'],
    applicantsCount: 5
  },
  {
    id: '2',
    title: 'مدرب مهارات تواصل',
    association: {
      id: '2',
      name: 'مركز النور للتأهيل',
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    },
    location: 'عمل عن بعد',
    jobType: 'دوام جزئي',
    category: 'تعليمية',
    description: 'فرصة عمل عن بعد لتدريب مهارات التواصل لذوي الاحتياجات الخاصة، مناسبة للأشخاص ذوي الإعاقة السمعية.',
    requirements: [
      'خبرة في مجال التواصل',
      'إتقان لغة الإشارة',
      'خبرة في التعليم عن بعد'
    ],
    salary: 'حسب الساعات',
    postedDate: '01/04/2025',
    disabilityTypes: ['سمعية'],
    applicantsCount: 3
  },
  {
    id: '3',
    title: 'محاسب',
    association: {
      id: '3',
      name: 'جمعية الأمل والعطاء',
      logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    location: 'حلب',
    jobType: 'دوام كامل',
    category: 'إدارية',
    description: 'مطلوب محاسب للعمل في مقر الجمعية، الوظيفة مناسبة لذوي الإعاقة الحركية.',
    requirements: [
      'شهادة في المحاسبة',
      'خبرة لا تقل عن سنة',
      'إتقان برامج المحاسبة'
    ],
    salary: '400,000 - 550,000 ل.س',
    postedDate: '31/03/2025',
    disabilityTypes: ['حركية'],
    applicantsCount: 7
  },
  {
    id: '4',
    title: 'مسؤول مواقع التواصل الاجتماعي',
    association: {
      id: '4',
      name: 'مؤسسة دعم الأشخاص ذوي الإعاقة',
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    },
    location: 'عمل عن بعد',
    jobType: 'دوام جزئي',
    category: 'تسويق',
    description: 'فرصة عمل عن بعد لإدارة حسابات التواصل الاجتماعي للمؤسسة. دور مهم في نشر الوعي حول قضايا ذوي الاحتياجات الخاصة.',
    requirements: [
      'خبرة في إدارة حسابات التواصل الاجتماعي',
      'مهارات كتابية جيدة',
      'فهم لقضايا ذوي الاحتياجات الخاصة'
    ],
    salary: '200,000 - 300,000 ل.س',
    postedDate: '30/03/2025',
    disabilityTypes: ['بصرية', 'حركية', 'سمعية'],
    applicantsCount: 10
  }
];

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedJobType, setSelectedJobType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  
  // Filter jobs based on search and filters
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.includes(searchTerm) || 
                         job.association.name.includes(searchTerm) ||
                         job.description.includes(searchTerm);
    
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesJobType = selectedJobType === 'all' || job.jobType === selectedJobType;
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesJobType && matchesLocation;
  });
  
  return (
    <div className="min-h-screen bg-gray-50" style={{ direction: 'rtl' }}>
      <div className="bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">فرص عمل لذوي الاحتياجات الخاصة</h1>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              فرص عمل مخصصة ومناسبة لذوي الاحتياجات الخاصة في مختلف المجالات والتخصصات
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="ابحث عن وظيفة، شركة، أو مكان..."
                className="pl-10 py-6 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow mt-4">
              <div className="flex items-center mb-2">
                <Filter size={18} className="text-primary ml-2" />
                <span className="font-medium">تصفية النتائج</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">المجال</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="جميع المجالات" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع المجالات</SelectItem>
                      <SelectItem value="طبية">طبية</SelectItem>
                      <SelectItem value="تعليمية">تعليمية</SelectItem>
                      <SelectItem value="إدارية">إدارية</SelectItem>
                      <SelectItem value="تسويق">تسويق</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm text-gray-500 block mb-1">نوع الدوام</label>
                  <Select value={selectedJobType} onValueChange={setSelectedJobType}>
                    <SelectTrigger>
                      <SelectValue placeholder="جميع الأنواع" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الأنواع</SelectItem>
                      <SelectItem value="دوام كامل">دوام كامل</SelectItem>
                      <SelectItem value="دوام جزئي">دوام جزئي</SelectItem>
                      <SelectItem value="عمل عن بعد">عمل عن بعد</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm text-gray-500 block mb-1">المدينة</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="جميع المدن" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع المدن</SelectItem>
                      <SelectItem value="دمشق">دمشق</SelectItem>
                      <SelectItem value="حلب">حلب</SelectItem>
                      <SelectItem value="حمص">حمص</SelectItem>
                      <SelectItem value="عمل عن بعد">عمل عن بعد</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">وظائف متاحة ({filteredJobs.length})</h2>
          
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="remote">عن بعد</TabsTrigger>
              <TabsTrigger value="recent">الأحدث</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="overflow-hidden transition-shadow hover:shadow-md">
                <CardContent className="p-0">
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="h-10 w-10 rounded overflow-hidden">
                        <img 
                          src={job.association.logo} 
                          alt={job.association.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <Badge variant="outline" className={
                        job.jobType === 'دوام كامل' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                        job.jobType === 'دوام جزئي' ? 'bg-green-50 text-green-600 border-green-200' :
                        'bg-purple-50 text-purple-600 border-purple-200'
                      }>
                        {job.jobType}
                      </Badge>
                    </div>
                    
                    <Link to={`/jobs/${job.id}`} className="block">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                    </Link>
                    
                    <Link 
                      to={`/associations/${job.association.id}`}
                      className="text-gray-600 text-sm hover:text-primary transition-colors"
                    >
                      {job.association.name}
                    </Link>
                    
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={14} className="ml-1" />
                        <span>{job.location}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm">
                        <Briefcase size={14} className="ml-1" />
                        <span>{job.category}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="ml-1" />
                        <span>تاريخ النشر: {job.postedDate}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {job.disabilityTypes.map((type, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        المتقدمين: {job.applicantsCount}
                      </span>
                      <Link to={`/jobs/${job.id}`}>
                        <Button variant="outline" size="sm">عرض التفاصيل</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">لا توجد وظائف تطابق معايير البحث</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedJobType('all');
                setSelectedLocation('all');
              }}
            >
              مسح عوامل التصفية
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
