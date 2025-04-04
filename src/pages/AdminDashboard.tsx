
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, Users, Building2, FileText, Newspaper, Award } from 'lucide-react';

// Import chart component for statistics
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const AdminDashboard = () => {
  const [statsData, setStatsData] = useState({
    totalBeneficiaries: 245,
    totalAssociations: 38,
    totalServices: 87,
    pendingRegistrations: 12,
    pendingServices: 8,
    pendingStories: 5,
    pendingArticles: 3,
  });

  const [registrationRequests, setRegistrationRequests] = useState([
    {
      id: 1,
      name: 'مركز النور للرعاية',
      type: 'association',
      date: '05/04/2025',
      status: 'pending',
      license: 'SY-34567',
    },
    {
      id: 2,
      name: 'علي محمود',
      type: 'beneficiary',
      date: '04/04/2025',
      status: 'pending',
    },
    {
      id: 3,
      name: 'جمعية الأيادي البيضاء',
      type: 'association',
      date: '03/04/2025',
      status: 'pending',
      license: 'SY-45678',
    }
  ]);

  const [servicesForApproval, setServicesForApproval] = useState([
    {
      id: 1,
      name: 'جلسات علاج فيزيائي مجانية',
      association: 'مركز الأمل للرعاية',
      category: 'طبية',
      date: '05/04/2025',
      price: 'مجاني',
    },
    {
      id: 2,
      name: 'دورة تدريبية للمهارات الحياتية',
      association: 'مركز المستقبل للتدريب',
      category: 'تعليمية',
      date: '04/04/2025',
      price: '3000 ل.س',
    }
  ]);

  const [storiesForApproval, setStoriesForApproval] = useState([
    {
      id: 1,
      title: 'رحلتي مع التحدي والأمل',
      beneficiary: 'سمير حسن',
      association: 'مركز الأمل للرعاية',
      date: '02/04/2025',
    },
    {
      id: 2,
      title: 'كيف ساعدتني جلسات العلاج',
      beneficiary: 'ريم خالد',
      association: 'مركز النور للرعاية',
      date: '01/04/2025',
    }
  ]);

  // Monthly visits data for chart
  const monthlyVisitsData = [
    { name: 'يناير', visits: 1200 },
    { name: 'فبراير', visits: 1900 },
    { name: 'مارس', visits: 2400 },
    { name: 'أبريل', visits: 2800 },
  ];

  // Services by category data for chart
  const servicesByCategoryData = [
    { name: 'تعليمية', count: 28 },
    { name: 'طبية', count: 32 },
    { name: 'نفسية', count: 15 },
    { name: 'اجتماعية', count: 8 },
    { name: 'استشارات', count: 22 },
    { name: 'دعم مادي', count: 11 },
  ];

  const handleApproveRegistration = (id) => {
    // This would connect to an API in a real application
    console.log('Approve registration:', id);
    setRegistrationRequests(
      registrationRequests.map(req => 
        req.id === id ? { ...req, status: 'approved' } : req
      )
    );
  };

  const handleRejectRegistration = (id) => {
    // This would connect to an API in a real application
    console.log('Reject registration:', id);
    setRegistrationRequests(
      registrationRequests.map(req => 
        req.id === id ? { ...req, status: 'rejected' } : req
      )
    );
  };

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">لوحة تحكم الإدارة</h1>
          <span className="text-sm text-gray-500">آخر تحديث: 04/04/2025</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">المستفيدين</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{statsData.totalBeneficiaries}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">الجمعيات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{statsData.totalAssociations}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">الخدمات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{statsData.totalServices}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">قيد الانتظار</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-500">
                {statsData.pendingRegistrations + statsData.pendingServices + statsData.pendingStories + statsData.pendingArticles}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>زيارات الموقع الشهرية</CardTitle>
              <CardDescription>إحصائيات الزيارات خلال الأشهر الأخيرة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={monthlyVisitsData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="visits" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>الخدمات حسب التصنيف</CardTitle>
              <CardDescription>توزيع الخدمات المقدمة على المنصة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={servicesByCategoryData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="registrations" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="registrations" className="flex items-center gap-1">
              <Users size={16} />
              <span>طلبات التسجيل</span>
              <Badge className="ml-1 bg-yellow-500">{statsData.pendingRegistrations}</Badge>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-1">
              <Building2 size={16} />
              <span>الخدمات</span>
              <Badge className="ml-1 bg-yellow-500">{statsData.pendingServices}</Badge>
            </TabsTrigger>
            <TabsTrigger value="stories" className="flex items-center gap-1">
              <Award size={16} />
              <span>قصص النجاح</span>
              <Badge className="ml-1 bg-yellow-500">{statsData.pendingStories}</Badge>
            </TabsTrigger>
            <TabsTrigger value="articles" className="flex items-center gap-1">
              <Newspaper size={16} />
              <span>المقالات</span>
              <Badge className="ml-1 bg-yellow-500">{statsData.pendingArticles}</Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="registrations" className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">طلبات التسجيل الجديدة</h2>
            </div>

            {registrationRequests.length > 0 ? (
              <div className="space-y-4">
                {registrationRequests.map((request) => (
                  <Card key={request.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold">{request.name}</h3>
                            <Badge>{request.type === 'association' ? 'جمعية/مركز' : 'مستفيد'}</Badge>
                          </div>
                          <p className="text-gray-500">تاريخ الطلب: {request.date}</p>
                          {request.license && <p className="text-gray-500">رقم الترخيص: {request.license}</p>}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {request.status === 'pending' ? (
                            <div className="flex gap-2">
                              <Button size="sm" variant="destructive" onClick={() => handleRejectRegistration(request.id)}>
                                <XCircle size={16} className="mr-1" />
                                رفض
                              </Button>
                              <Button size="sm" onClick={() => handleApproveRegistration(request.id)}>
                                <CheckCircle2 size={16} className="mr-1" />
                                قبول
                              </Button>
                            </div>
                          ) : (
                            <Badge variant={request.status === 'approved' ? 'default' : 'destructive'}>
                              {request.status === 'approved' ? 'تمت الموافقة' : 'تم الرفض'}
                            </Badge>
                          )}
                          <Button variant="outline" size="sm">عرض التفاصيل</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لا توجد طلبات تسجيل جديدة</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="services" className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">خدمات بانتظار الموافقة</h2>
            </div>

            {servicesForApproval.length > 0 ? (
              <div className="space-y-4">
                {servicesForApproval.map((service) => (
                  <Card key={service.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{service.name}</h3>
                          <p className="text-gray-500">الجمعية/المركز: {service.association}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{service.category}</Badge>
                            <span className="text-sm">السعر: {service.price}</span>
                          </div>
                          <p className="text-gray-500 text-sm mt-1">تاريخ الطلب: {service.date}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex gap-2">
                            <Button size="sm" variant="destructive">
                              <XCircle size={16} className="mr-1" />
                              رفض
                            </Button>
                            <Button size="sm">
                              <CheckCircle2 size={16} className="mr-1" />
                              قبول
                            </Button>
                          </div>
                          <Button variant="outline" size="sm">عرض التفاصيل</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لا توجد خدمات بانتظار الموافقة</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="stories" className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">قصص نجاح بانتظار الموافقة</h2>
            </div>

            {storiesForApproval.length > 0 ? (
              <div className="space-y-4">
                {storiesForApproval.map((story) => (
                  <Card key={story.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{story.title}</h3>
                          <p className="text-gray-500">المستفيد: {story.beneficiary}</p>
                          <p className="text-gray-500">الجمعية/المركز: {story.association}</p>
                          <p className="text-gray-500 text-sm mt-1">تاريخ الإرسال: {story.date}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex gap-2">
                            <Button size="sm" variant="destructive">
                              <XCircle size={16} className="mr-1" />
                              رفض
                            </Button>
                            <Button size="sm">
                              <CheckCircle2 size={16} className="mr-1" />
                              قبول
                            </Button>
                          </div>
                          <Button variant="outline" size="sm">عرض القصة كاملة</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لا توجد قصص نجاح بانتظار الموافقة</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="articles" className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">مقالات بانتظار الموافقة</h2>
              <Button>إضافة مقالة جديدة</Button>
            </div>

            <div className="text-center py-10">
              <p className="text-gray-500">لا توجد مقالات بانتظار الموافقة</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
