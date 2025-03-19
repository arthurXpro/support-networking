
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, Globe, MapPin, Calendar, Clock, Check, FileText, Star, ArrowRight, MessageCircle, AlertCircle, Facebook, Twitter, Instagram } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

// بيانات مثال عن الجمعية (في تطبيق حقيقي ستكون من قاعدة البيانات)
const associationData = {
  id: 1,
  name: "جمعية رعاية ذوي الاحتياجات الخاصة",
  logo: "https://placehold.co/200x200",
  description: "جمعية خيرية مرخصة من وزارة الموارد البشرية والتنمية الاجتماعية، تأسست عام 2005 بهدف تقديم خدمات متخصصة لذوي الاحتياجات الخاصة وأسرهم. تعمل الجمعية على تطوير قدرات الأفراد من ذوي الإعاقة وتمكينهم من الاندماج في المجتمع بفاعلية وكرامة.",
  mission: "توفير بيئة داعمة وشاملة تمكن الأشخاص ذوي الإعاقة من تحقيق أقصى إمكاناتهم.",
  vision: "مجتمع متكامل يتمتع فيه الأشخاص ذوو الإعاقة بحياة كريمة ومستقلة.",
  values: ["الاحترام", "الشمولية", "التمكين", "الجودة", "الشفافية"],
  licenseNumber: "123456",
  location: "الرياض، حي الورود، شارع الأمير سلطان",
  contactInfo: {
    phone: "+966 11 2345678",
    email: "info@example.org",
    website: "www.example.org"
  },
  workingHours: {
    days: "الأحد - الخميس",
    hours: "8:00 ص - 4:00 م"
  },
  socialMedia: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com"
  },
  services: [
    {
      id: 1,
      title: "الخدمات التعليمية",
      description: "برامج تعليمية متخصصة ودعم أكاديمي مصمم خصيصًا للطلاب من ذوي الاحتياجات الخاصة.",
      icon: "School"
    },
    {
      id: 2,
      title: "الخدمات الطبية",
      description: "رعاية طبية متخصصة وعلاجات مخصصة للاحتياجات الصحية المختلفة.",
      icon: "Stethoscope"
    },
    {
      id: 3,
      title: "الخدمات النفسية",
      description: "دعم نفسي واستشارات من مختصين مؤهلين للتعامل مع التحديات النفسية.",
      icon: "Brain"
    }
  ],
  team: [
    {
      name: "د. أحمد محمد",
      position: "المدير التنفيذي",
      bio: "خبرة أكثر من 15 عاماً في مجال التربية الخاصة"
    },
    {
      name: "أ. سارة عبدالله",
      position: "مديرة البرامج التعليمية",
      bio: "متخصصة في تطوير المناهج التعليمية لذوي الاحتياجات الخاصة"
    },
    {
      name: "د. خالد العمري",
      position: "المدير الطبي",
      bio: "استشاري في طب إعادة التأهيل والعلاج الطبيعي"
    }
  ],
  achievements: [
    "حصلت على جائزة التميز في خدمة ذوي الاحتياجات الخاصة لعام 2020",
    "تخريج أكثر من 500 مستفيد من برامج التأهيل المهني",
    "افتتاح 3 فروع جديدة خلال الخمس سنوات الماضية"
  ],
  ratings: {
    overall: 4.8,
    services: 4.7,
    staff: 4.9,
    facilities: 4.6,
    reviewsCount: 120
  }
};

const AssociationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // في تطبيق حقيقي، سنقوم بجلب بيانات الجمعية بناءً على المعرف
  // لكن هنا نستخدم بيانات ثابتة للتوضيح
  
  const handleContact = () => {
    toast({
      title: "تم إرسال طلب التواصل",
      description: "سيقوم فريق الجمعية بالتواصل معك قريباً",
    });
  };
  
  if (!associationData) {
    return (
      <div className="font-sans" style={{ direction: 'rtl' }}>
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <AlertCircle className="mx-auto h-16 w-16 text-destructive mb-4" />
          <h1 className="text-3xl font-bold mb-4">الجمعية غير موجودة</h1>
          <p className="mb-8 text-gray-600">عذراً، لم نتمكن من العثور على الجمعية المطلوبة</p>
          <Link to="/associations">
            <Button>العودة إلى الجمعيات</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="font-sans" style={{ direction: 'rtl' }}>
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl flex items-center justify-center p-2">
              {/* يمكن استبدالها بشعار الجمعية الحقيقي */}
              <span className="text-4xl font-bold text-primary">{associationData.name.charAt(0)}</span>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold">{associationData.name}</h1>
                <div className="bg-white/20 p-1 rounded-full">
                  <Check className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 ml-1" />
                  <span>{associationData.location.split(',')[0]}</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-amber-300">
                    <Star className="fill-current h-5 w-5" />
                  </div>
                  <span className="font-bold mx-1">{associationData.ratings.overall}</span>
                  <span className="text-white/80 text-sm">({associationData.ratings.reviewsCount} تقييم)</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">جمعية خيرية</span>
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">مرخصة</span>
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">ذوي الإعاقة</span>
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">رعاية متكاملة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Information */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="about">نبذة عنا</TabsTrigger>
                <TabsTrigger value="services">خدماتنا</TabsTrigger>
                <TabsTrigger value="team">فريق العمل</TabsTrigger>
                <TabsTrigger value="reviews">التقييمات</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-4">من نحن</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {associationData.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-bold text-primary mb-2">رسالتنا</h3>
                      <p className="text-gray-700">{associationData.mission}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-bold text-primary mb-2">رؤيتنا</h3>
                      <p className="text-gray-700">{associationData.vision}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-bold text-primary mb-2">قيمنا</h3>
                      <div className="flex flex-wrap gap-2">
                        {associationData.values.map((value, index) => (
                          <span key={index} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-4">إنجازاتنا</h2>
                  <ul className="space-y-4">
                    {associationData.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full flex-shrink-0 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-gray-700">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="services" className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6">خدماتنا المتخصصة</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {associationData.services.map((service) => (
                      <div key={service.id} className="border rounded-lg p-6 hover:border-primary transition-colors">
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <Link 
                          to={`/services/${service.id}`} 
                          className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all"
                        >
                          <span>استكشف الخدمة</span>
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-4">طلب خدمة مخصصة</h2>
                  <p className="text-gray-700 mb-4">
                    إذا كنت تبحث عن خدمة محددة غير مدرجة في قائمة خدماتنا، يمكنك طلب خدمة مخصصة وسيقوم فريقنا بدراسة طلبك والرد عليك في أقرب وقت.
                  </p>
                  <Button onClick={handleContact}>طلب خدمة مخصصة</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="team" className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6">فريق العمل</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {associationData.team.map((member, index) => (
                      <div key={index} className="text-center p-6 border rounded-lg">
                        <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-primary mb-3">{member.position}</p>
                        <p className="text-gray-600 text-sm">{member.bio}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">انضم إلى فريقنا</h3>
                  <p className="text-gray-600 mb-4">
                    نحن دائمًا نبحث عن مهنيين موهوبين وملتزمين للانضمام إلى فريقنا
                  </p>
                  <Button variant="outline">استعرض الوظائف المتاحة</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <h2 className="text-2xl font-bold">التقييمات والآراء</h2>
                    <Button>إضافة تقييم</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{associationData.ratings.overall}</div>
                      <div className="flex justify-center text-amber-500 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="fill-current h-5 w-5" />
                        ))}
                      </div>
                      <p className="text-gray-500 text-sm">التقييم العام</p>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>الخدمات</span>
                          <span className="font-bold">{associationData.ratings.services}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${associationData.ratings.services * 20}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>فريق العمل</span>
                          <span className="font-bold">{associationData.ratings.staff}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${associationData.ratings.staff * 20}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>المرافق</span>
                          <span className="font-bold">{associationData.ratings.facilities}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${associationData.ratings.facilities * 20}%` }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center flex flex-col justify-center">
                      <p className="text-gray-500 mb-1">إجمالي التقييمات</p>
                      <p className="text-3xl font-bold">{associationData.ratings.reviewsCount}</p>
                    </div>
                  </div>
                  
                  {/* Sample Reviews */}
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                            م
                          </div>
                          <div>
                            <p className="font-bold">محمد عبدالله</p>
                            <p className="text-xs text-gray-500">قبل 3 أيام</p>
                          </div>
                        </div>
                        <div className="flex text-amber-500">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="fill-current h-4 w-4" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        جمعية متميزة وتقدم خدمات على مستوى عالي من الجودة. استفاد ابني كثيراً من برامجهم وأنصح الجميع بالتسجيل معهم.
                      </p>
                    </div>
                    
                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                            س
                          </div>
                          <div>
                            <p className="font-bold">سارة محمد</p>
                            <p className="text-xs text-gray-500">قبل أسبوع</p>
                          </div>
                        </div>
                        <div className="flex text-amber-500">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="fill-current h-4 w-4" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-gray-700">
                        فريق العمل متعاون جداً ويبذلون جهداً كبيراً. أتمنى لو كانت المرافق أكثر تجهيزاً.
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                            ع
                          </div>
                          <div>
                            <p className="font-bold">عبدالرحمن علي</p>
                            <p className="text-xs text-gray-500">قبل شهر</p>
                          </div>
                        </div>
                        <div className="flex text-amber-500">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="fill-current h-4 w-4" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        من أفضل الجمعيات التي تعاملت معها. الخدمات متنوعة والأسعار مناسبة والفريق على مستوى عالي من الاحترافية.
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <Button variant="ghost">عرض المزيد من التقييمات</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">معلومات التواصل</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">رقم الهاتف</p>
                    <p className="font-medium">{associationData.contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">البريد الإلكتروني</p>
                    <p className="font-medium">{associationData.contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">الموقع الإلكتروني</p>
                    <p className="font-medium">{associationData.contactInfo.website}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">العنوان</p>
                    <p className="font-medium">{associationData.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">أيام العمل</p>
                    <p className="font-medium">{associationData.workingHours.days}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ساعات العمل</p>
                    <p className="font-medium">{associationData.workingHours.hours}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-3 mt-6">
                <Button variant="ghost" size="icon" className="rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
              <Button className="w-full mb-3" onClick={handleContact}>
                طلب استشارة
              </Button>
              <Button variant="outline" className="w-full mb-3">
                زيارة الموقع الإلكتروني
              </Button>
              <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span>محادثة مباشرة</span>
              </Button>
            </div>
            
            {/* Documents */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">الوثائق والملفات</h3>
              
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  <span>دليل الجمعية</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  <span>نموذج التسجيل</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  <span>برشور الخدمات</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  <span>التقرير السنوي</span>
                </Button>
              </div>
            </div>
            
            {/* License Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">رقم الترخيص</p>
                  <p className="font-medium">{associationData.licenseNumber}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                هذه الجمعية مرخصة من وزارة الموارد البشرية والتنمية الاجتماعية وتخضع لإشرافها.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AssociationDetails;
