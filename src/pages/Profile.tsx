
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Calendar, FileText, Bell, MessageSquare, History, Settings, LogOut, Edit, MapPin, Mail, Phone, Clock, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

// بيانات المستخدم (للعرض فقط، في تطبيق حقيقي ستكون من قاعدة البيانات)
const userData = {
  name: "أحمد محمد",
  email: "ahmad@example.com",
  phone: "05xxxxxxxx",
  location: "الرياض، السعودية",
  bio: "أب لطفل من ذوي الاحتياجات الخاصة وأسعى للحصول على أفضل الخدمات له",
  avatar: null,
  memberSince: "2023-05-15",
  lastLogin: "2023-11-10",
  userType: "ولي أمر",
  profileCompletion: 75
};

// بيانات العائلة (للعرض فقط)
const familyData = [
  {
    id: 1,
    name: "محمد أحمد",
    relation: "ابن",
    age: 10,
    disabilityType: "صعوبات تعلم",
    servicesCount: 2
  }
];

// بيانات الخدمات النشطة (للعرض فقط)
const activeServices = [
  {
    id: 1,
    title: "جلسات تعليمية",
    provider: "جمعية رعاية ذوي الاحتياجات الخاصة",
    status: "مستمرة",
    nextSession: "2023-11-15",
    progress: 60
  },
  {
    id: 2,
    title: "علاج طبيعي",
    provider: "مركز الأمل للرعاية والتأهيل",
    status: "مستمرة",
    nextSession: "2023-11-12",
    progress: 40
  }
];

// بيانات التقارير (للعرض فقط)
const reports = [
  {
    id: 1,
    title: "تقرير التقدم الشهري",
    date: "2023-10-30",
    provider: "جمعية رعاية ذوي الاحتياجات الخاصة",
    type: "تقرير دوري"
  },
  {
    id: 2,
    title: "تقرير التقييم الأولي",
    date: "2023-09-15",
    provider: "مركز الأمل للرعاية والتأهيل",
    type: "تقييم"
  }
];

// بيانات الإشعارات (للعرض فقط)
const notifications = [
  {
    id: 1,
    title: "تم جدولة جلسة جديدة",
    message: "تم جدولة جلسة تعليمية يوم الأربعاء القادم الساعة 4 مساءً",
    date: "2023-11-09",
    read: false
  },
  {
    id: 2,
    title: "تقرير جديد متاح",
    message: "تم إضافة تقرير التقدم الشهري الجديد. يمكنك الاطلاع عليه الآن",
    date: "2023-11-01",
    read: true
  },
  {
    id: 3,
    title: "تذكير بموعد الجلسة",
    message: "لديك جلسة علاج طبيعي غداً الساعة 5 مساءً",
    date: "2023-10-25",
    read: true
  }
];

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleLogout = () => {
    toast({
      title: "تم تسجيل الخروج بنجاح",
      description: "نتمنى أن نراك قريباً!",
    });
    // هنا سيتم توجيه المستخدم إلى صفحة تسجيل الدخول
    // في تطبيق حقيقي
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
  };
  
  return (
    <div className="font-sans" style={{ direction: 'rtl' }}>
      <Navbar />
      
      {/* Profile Header */}
      <div className="bg-gradient-to-b from-primary/90 to-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-24 h-24 border-4 border-white">
              <AvatarImage src={userData.avatar} />
              <AvatarFallback className="bg-secondary text-primary text-2xl font-bold">
                {userData.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-right">
              <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span>{userData.phone}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Badge variant="secondary" className="text-primary">
                  {userData.userType}
                </Badge>
                <Badge variant="outline" className="bg-white/20 text-white border-0">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>عضو منذ {formatDate(userData.memberSince)}</span>
                </Badge>
              </div>
            </div>
            
            <div className="md:ms-auto flex gap-2">
              <Button variant="secondary" onClick={() => setIsEditing(true)}>
                <Edit className="h-4 w-4 mr-2" />
                <span>تعديل الملف الشخصي</span>
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                <span>تسجيل الخروج</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Completion */}
      <div className="container mx-auto px-4 py-6 bg-white shadow-sm -mt-6 rounded-t-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">اكتمال الملف الشخصي ({userData.profileCompletion}%)</span>
              <span className="text-sm text-primary">أكمل ملفك الشخصي</span>
            </div>
            <Progress value={userData.profileCompletion} className="h-2" />
          </div>
          <Button variant="outline" className="md:flex-shrink-0">
            <Settings className="h-4 w-4 mr-2" />
            <span>إعدادات الحساب</span>
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="dashboard">
          <div className="border-b mb-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>لوحة التحكم</span>
              </TabsTrigger>
              <TabsTrigger value="family" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>العائلة</span>
              </TabsTrigger>
              <TabsTrigger value="services" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>الخدمات</span>
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>التقارير</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>الإشعارات</span>
                <Badge variant="secondary" className="ml-1 bg-primary text-white h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {notifications.filter(n => !n.read).length}
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Dashboard */}
          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DashboardCard 
                title="نظرة عامة" 
                icon={<User className="h-6 w-6 text-primary" />} 
                link="/profile/overview"
              >
                <p className="text-gray-600 mb-4">{userData.bio || "لم يتم إضافة نبذة عنك بعد."}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>آخر تسجيل دخول: {formatDate(userData.lastLogin)}</span>
                </div>
              </DashboardCard>
              
              <DashboardCard 
                title="أفراد العائلة" 
                icon={<User className="h-6 w-6 text-green-600" />} 
                link="/profile/family"
                badge={familyData.length.toString()}
              >
                {familyData.length > 0 ? (
                  <div className="space-y-3">
                    {familyData.map(member => (
                      <div key={member.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.relation} ({member.age} سنوات) - {member.disabilityType}</p>
                        </div>
                        <Badge variant="outline">{member.servicesCount} خدمات</Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">لم تقم بإضافة أفراد عائلة بعد.</p>
                )}
              </DashboardCard>
              
              <DashboardCard 
                title="الخدمات النشطة" 
                icon={<FileText className="h-6 w-6 text-blue-600" />} 
                link="/profile/services"
                badge={activeServices.length.toString()}
              >
                {activeServices.length > 0 ? (
                  <div className="space-y-3">
                    {activeServices.map(service => (
                      <div key={service.id} className="border-b pb-3 last:border-0 last:pb-0">
                        <div className="flex justify-between mb-1">
                          <p className="font-medium">{service.title}</p>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {service.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{service.provider}</p>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">التقدم في الخدمة</p>
                          <Progress value={service.progress} className="h-1.5" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">ليس لديك خدمات نشطة حالياً.</p>
                )}
              </DashboardCard>
              
              <DashboardCard 
                title="المواعيد القادمة" 
                icon={<Calendar className="h-6 w-6 text-purple-600" />} 
                link="/profile/appointments"
              >
                {activeServices.length > 0 ? (
                  <div className="space-y-3">
                    {activeServices.map(service => (
                      <div key={service.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{service.title}</p>
                          <p className="text-sm text-gray-500">{formatDate(service.nextSession)}</p>
                        </div>
                        <Button variant="outline" size="sm">تفاصيل</Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">ليس لديك مواعيد قادمة.</p>
                )}
              </DashboardCard>
              
              <DashboardCard 
                title="آخر التقارير" 
                icon={<FileText className="h-6 w-6 text-amber-600" />} 
                link="/profile/reports"
                badge={reports.length.toString()}
              >
                {reports.length > 0 ? (
                  <div className="space-y-3">
                    {reports.map(report => (
                      <div key={report.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{report.title}</p>
                          <p className="text-sm text-gray-500">{formatDate(report.date)} - {report.provider}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary">عرض</Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">لا توجد تقارير متاحة حالياً.</p>
                )}
              </DashboardCard>
              
              <DashboardCard 
                title="آخر الإشعارات" 
                icon={<Bell className="h-6 w-6 text-red-600" />} 
                link="/profile/notifications"
                badge={notifications.filter(n => !n.read).length.toString()}
              >
                {notifications.length > 0 ? (
                  <div className="space-y-3">
                    {notifications.slice(0, 2).map(notification => (
                      <div key={notification.id} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${notification.read ? 'bg-gray-300' : 'bg-primary'}`}></div>
                        <div>
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-gray-500">{formatDate(notification.date)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">لا توجد إشعارات جديدة.</p>
                )}
              </DashboardCard>
            </div>
          </TabsContent>
          
          {/* Family */}
          <TabsContent value="family">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">أفراد العائلة</h2>
                <Button>إضافة فرد جديد</Button>
              </div>
              
              {familyData.length > 0 ? (
                <div className="space-y-6">
                  {familyData.map(member => (
                    <div key={member.id} className="border rounded-lg p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-16 h-16">
                            <AvatarFallback className="bg-secondary text-primary text-xl font-bold">
                              {member.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="outline">{member.relation}</Badge>
                              <Badge variant="outline">{member.age} سنوات</Badge>
                              <Badge variant="secondary">{member.disabilityType}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                          <Button variant="outline">عرض الملف</Button>
                          <Button variant="ghost" className="text-primary">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-bold mb-2">الخدمات النشطة</h4>
                          <p className="text-2xl font-bold text-primary">{member.servicesCount}</p>
                          <Link to={`/profile/family/${member.id}/services`} className="text-sm text-primary flex items-center mt-2">
                            <span>عرض الخدمات</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-bold mb-2">التقارير</h4>
                          <p className="text-2xl font-bold text-primary">5</p>
                          <Link to={`/profile/family/${member.id}/reports`} className="text-sm text-primary flex items-center mt-2">
                            <span>عرض التقارير</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-bold mb-2">المواعيد القادمة</h4>
                          <p className="text-2xl font-bold text-primary">2</p>
                          <Link to={`/profile/family/${member.id}/appointments`} className="text-sm text-primary flex items-center mt-2">
                            <span>عرض المواعيد</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 mb-4">لم تقم بإضافة أفراد عائلة بعد</p>
                  <Button>إضافة فرد جديد</Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* Services */}
          <TabsContent value="services">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">الخدمات</h2>
                <Link to="/services">
                  <Button>استكشاف خدمات جديدة</Button>
                </Link>
              </div>
              
              <Tabs defaultValue="active">
                <TabsList className="mb-6">
                  <TabsTrigger value="active">الخدمات النشطة</TabsTrigger>
                  <TabsTrigger value="pending">قيد الانتظار</TabsTrigger>
                  <TabsTrigger value="completed">المكتملة</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active">
                  {activeServices.length > 0 ? (
                    <div className="space-y-6">
                      {activeServices.map(service => (
                        <div key={service.id} className="border rounded-lg p-6">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold">{service.title}</h3>
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  {service.status}
                                </Badge>
                              </div>
                              <p className="text-gray-600 mt-1">{service.provider}</p>
                            </div>
                            <div className="flex gap-2 w-full md:w-auto">
                              <Button variant="outline">عرض التفاصيل</Button>
                              <Button variant="secondary">جدولة موعد</Button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="border rounded-lg p-4">
                              <h4 className="text-sm text-gray-500 mb-1">التقدم في الخدمة</h4>
                              <div className="flex items-end gap-2">
                                <p className="text-2xl font-bold text-primary">{service.progress}%</p>
                                <Progress value={service.progress} className="h-2 flex-1" />
                              </div>
                            </div>
                            <div className="border rounded-lg p-4">
                              <h4 className="text-sm text-gray-500 mb-1">المستفيد</h4>
                              <p className="font-bold">محمد أحمد</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <h4 className="text-sm text-gray-500 mb-1">الموعد القادم</h4>
                              <p className="font-bold">{formatDate(service.nextSession)}</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <h4 className="text-sm text-gray-500 mb-1">عدد الجلسات</h4>
                              <p className="font-bold">6 من 10</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-4">ليس لديك خدمات نشطة حالياً</p>
                      <Link to="/services">
                        <Button>استكشاف الخدمات</Button>
                      </Link>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="pending">
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">ليس لديك خدمات قيد الانتظار حالياً</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">ليس لديك خدمات مكتملة حالياً</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>
          
          {/* Reports */}
          <TabsContent value="reports">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">التقارير</h2>
                <Button variant="outline">تصدير التقارير</Button>
              </div>
              
              {reports.length > 0 ? (
                <div className="space-y-6">
                  {reports.map(report => (
                    <div key={report.id} className="border rounded-lg p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                          <h3 className="text-xl font-bold">{report.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline">{report.type}</Badge>
                            <p className="text-gray-500 text-sm">{formatDate(report.date)}</p>
                            <p className="text-gray-500 text-sm">بواسطة: {report.provider}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                          <Button variant="outline">تحميل التقرير</Button>
                          <Button variant="secondary">عرض</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">لا توجد تقارير متاحة حالياً</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* Notifications */}
          <TabsContent value="notifications">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">الإشعارات</h2>
                <Button variant="ghost">تحديد الكل كمقروء</Button>
              </div>
              
              {notifications.length > 0 ? (
                <div className="space-y-6">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`border rounded-lg p-6 ${!notification.read ? 'bg-blue-50 border-blue-200' : ''}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${notification.read ? 'bg-gray-300' : 'bg-primary'}`}></div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2">
                            <h3 className="font-bold">{notification.title}</h3>
                            <p className="text-sm text-gray-500">{formatDate(notification.date)}</p>
                          </div>
                          <p className="text-gray-600">{notification.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">لا توجد إشعارات جديدة</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

const DashboardCard = ({ title, icon, children, link, badge }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-bold">{title}</h3>
          {badge && (
            <Badge variant="secondary" className="ml-2">
              {badge}
            </Badge>
          )}
        </div>
        {link && (
          <Link to={link} className="text-primary hover:underline text-sm flex items-center">
            <span>عرض المزيد</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="text-sm">{children}</div>
    </div>
  );
};

export default Profile;
