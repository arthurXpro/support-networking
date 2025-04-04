
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CalendarClock, Calendar, MapPin, Clock, CheckCircle2, XCircle } from 'lucide-react';

const BeneficiaryDashboard = () => {
  const [user, setUser] = useState({
    name: 'محمد أحمد',
    email: 'mohamed@example.com',
    phone: '09xxxxxxxx',
    type: 'المستفيد نفسه',
    joinDate: '15/01/2023',
  });

  const [activeRequests, setActiveRequests] = useState([
    {
      id: 1,
      serviceName: 'جلسة علاج طبيعي',
      associationName: 'جمعية النور للرعاية',
      status: 'pending',
      date: '12/04/2025',
      time: '09:30 صباحاً',
      location: 'دمشق - المزة',
    },
    {
      id: 2,
      serviceName: 'استشارة نفسية',
      associationName: 'مركز الأمل للدعم النفسي',
      status: 'approved',
      date: '18/04/2025',
      time: '11:00 صباحاً',
      location: 'عبر الإنترنت',
    }
  ]);

  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      title: 'يوم ترفيهي للأطفال',
      date: '20/04/2025',
      time: '10:00 صباحاً',
      location: 'حديقة تشرين - دمشق',
      association: 'جمعية المستقبل للرعاية',
    },
    {
      id: 2,
      title: 'ورشة عمل مهارات الحياة',
      date: '25/04/2025',
      time: '12:00 ظهراً',
      location: 'مركز الثقافة - حلب',
      association: 'جمعية الأمل والعطاء',
    }
  ]);

  const [recentServices, setRecentServices] = useState([
    {
      id: 1,
      name: 'جلسة علاج فيزيائي',
      category: 'طبية',
      date: '01/03/2025',
      association: 'مركز الرعاية المتكاملة',
      status: 'completed'
    },
    {
      id: 2,
      name: 'جلسة دعم نفسي',
      category: 'نفسية',
      date: '15/02/2025',
      association: 'مركز الدعم النفسي',
      status: 'completed'
    }
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">قيد الانتظار</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">تمت الموافقة</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">مكتمل</Badge>;
      case 'cancelled':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">ملغي</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout userType="beneficiary">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">مرحباً، {user.name}</h1>
          <Button variant="outline">تعديل الملف الشخصي</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">الطلبات النشطة</CardTitle>
              <CardDescription>طلبات الخدمات الحالية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{activeRequests.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">الفعاليات القادمة</CardTitle>
              <CardDescription>الفعاليات المتاحة قريباً</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{upcomingEvents.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">الخدمات المستفاد منها</CardTitle>
              <CardDescription>إجمالي الخدمات السابقة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{recentServices.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="requests" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="requests">الطلبات النشطة</TabsTrigger>
            <TabsTrigger value="events">الفعاليات القادمة</TabsTrigger>
            <TabsTrigger value="history">سجل الخدمات</TabsTrigger>
          </TabsList>
          
          <TabsContent value="requests" className="mt-6">
            {activeRequests.length > 0 ? (
              <div className="space-y-4">
                {activeRequests.map((request) => (
                  <Card key={request.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{request.serviceName}</h3>
                          <p className="text-gray-500">{request.associationName}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{request.date}</span>
                            <Clock className="h-4 w-4 text-gray-500 ml-2" />
                            <span className="text-sm">{request.time}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{request.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(request.status)}
                          <div className="flex gap-2 mt-2">
                            <Button variant="outline" size="sm">إلغاء الطلب</Button>
                            <Button size="sm">تفاصيل</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لا توجد طلبات نشطة حالياً</p>
                <Button className="mt-4">استكشاف الخدمات</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="events" className="mt-6">
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-gray-500">{event.association}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{event.date}</span>
                        <Clock className="h-4 w-4 text-gray-500 ml-2" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button size="sm">تفاصيل الفعالية</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لا توجد فعاليات قادمة حالياً</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="history" className="mt-6">
            {recentServices.length > 0 ? (
              <div className="space-y-4">
                {recentServices.map((service) => (
                  <Card key={service.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{service.name}</h3>
                          <p className="text-gray-500">{service.association}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{service.date}</span>
                            <Badge variant="outline" className="ml-2">{service.category}</Badge>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(service.status)}
                          <Button variant="outline" size="sm" className="mt-2">
                            إضافة قصة نجاح
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لم تستفد من أي خدمات سابقاً</p>
                <Button className="mt-4">استكشاف الخدمات</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default BeneficiaryDashboard;
