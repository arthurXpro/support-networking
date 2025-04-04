
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CalendarClock, Calendar, MapPin, Clock, Users, Clipboard, PlusCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const AssociationDashboard = () => {
  const [association, setAssociation] = useState({
    name: 'جمعية الأمل للرعاية',
    email: 'info@alamal.org',
    phone: '09xxxxxxxx',
    license: 'SY-12345',
    joinDate: '10/01/2023',
  });

  const [stats, setStats] = useState({
    totalServices: 12,
    activeRequests: 8,
    completedRequests: 45,
    events: 3,
    jobs: 2,
  });

  const [serviceRequests, setServiceRequests] = useState([
    {
      id: 1,
      serviceName: 'جلسة علاج طبيعي',
      beneficiaryName: 'محمد أحمد',
      status: 'pending',
      date: '12/04/2025',
      time: '09:30 صباحاً',
      beneficiaryPhone: '09xxxxxxxx',
    },
    {
      id: 2,
      serviceName: 'استشارة نفسية',
      beneficiaryName: 'ليلى خالد',
      status: 'approved',
      date: '18/04/2025',
      time: '11:00 صباحاً',
      beneficiaryPhone: '09xxxxxxxx',
    },
    {
      id: 3,
      serviceName: 'جلسة تعليمية للنطق',
      beneficiaryName: 'عمر فايز',
      status: 'pending',
      date: '20/04/2025',
      time: '10:00 صباحاً',
      beneficiaryPhone: '09xxxxxxxx',
    }
  ]);

  const [services, setServices] = useState([
    {
      id: 1,
      name: 'جلسة علاج طبيعي',
      category: 'طبية',
      price: 'مجاني',
      requestsCount: 15,
      isActive: true
    },
    {
      id: 2,
      name: 'استشارة نفسية',
      category: 'نفسية',
      price: '5000 ل.س',
      requestsCount: 10,
      isActive: true
    },
    {
      id: 3,
      name: 'جلسة تعليمية للنطق',
      category: 'تعليمية',
      price: '3000 ل.س',
      requestsCount: 8,
      isActive: true
    }
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'يوم ترفيهي للأطفال',
      date: '20/04/2025',
      time: '10:00 صباحاً',
      location: 'حديقة تشرين - دمشق',
      attendees: 15
    },
    {
      id: 2,
      title: 'ورشة عمل مهارات الحياة',
      date: '25/04/2025',
      time: '12:00 ظهراً',
      location: 'مقر الجمعية - دمشق',
      attendees: 8
    }
  ]);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'أخصائي علاج طبيعي',
      location: 'دمشق',
      applicantsCount: 5,
      isActive: true
    },
    {
      id: 2,
      title: 'مدرب مهارات تواصل',
      location: 'عمل عن بعد',
      applicantsCount: 3,
      isActive: true
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

  const [newService, setNewService] = useState({
    name: '',
    description: '',
    category: 'طبية',
    price: '',
    isPaid: 'free'
  });

  const handleAddService = () => {
    // This would connect to an API in a real application
    console.log('New service:', newService);
    // Reset form
    setNewService({
      name: '',
      description: '',
      category: 'طبية',
      price: '',
      isPaid: 'free'
    });
  };

  return (
    <DashboardLayout userType="association">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">مرحباً، {association.name}</h1>
          <Button variant="outline">تعديل معلومات الجمعية</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">الخدمات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalServices}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">طلبات جديدة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-500">{stats.activeRequests}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">مكتملة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">{stats.completedRequests}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">الفعاليات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-500">{stats.events}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">الوظائف</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-500">{stats.jobs}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="requests" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requests">طلبات الخدمات</TabsTrigger>
            <TabsTrigger value="services">الخدمات المقدمة</TabsTrigger>
            <TabsTrigger value="events">الفعاليات</TabsTrigger>
            <TabsTrigger value="jobs">الوظائف</TabsTrigger>
          </TabsList>
          
          <TabsContent value="requests" className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">طلبات الخدمات الواردة</h2>
            </div>

            {serviceRequests.length > 0 ? (
              <div className="space-y-4">
                {serviceRequests.map((request) => (
                  <Card key={request.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{request.serviceName}</h3>
                          <p className="text-gray-500">المستفيد: {request.beneficiaryName}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{request.date}</span>
                            <Clock className="h-4 w-4 text-gray-500 ml-2" />
                            <span className="text-sm">{request.time}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm">رقم الجوال: {request.beneficiaryPhone}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(request.status)}
                          <div className="flex gap-2 mt-2">
                            {request.status === 'pending' && (
                              <>
                                <Button variant="destructive" size="sm">رفض</Button>
                                <Button size="sm">قبول</Button>
                              </>
                            )}
                            {request.status === 'approved' && (
                              <Button size="sm">تحديد موعد</Button>
                            )}
                            <Button variant="outline" size="sm">تفاصيل</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لا توجد طلبات جديدة حالياً</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="services" className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">الخدمات المقدمة</h2>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <PlusCircle size={16} />
                    <span>إضافة خدمة جديدة</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>إضافة خدمة جديدة</DialogTitle>
                    <DialogDescription>
                      أضف خدمة جديدة لتقديمها للمستفيدين من ذوي الاحتياجات الخاصة
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="service-name">اسم الخدمة</Label>
                      <Input 
                        id="service-name" 
                        placeholder="أدخل اسم الخدمة" 
                        value={newService.name}
                        onChange={(e) => setNewService({...newService, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service-desc">وصف الخدمة</Label>
                      <Input 
                        id="service-desc" 
                        placeholder="أدخل وصفاً مختصراً للخدمة" 
                        value={newService.description}
                        onChange={(e) => setNewService({...newService, description: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service-category">تصنيف الخدمة</Label>
                      <RadioGroup 
                        value={newService.category}
                        onValueChange={(value) => setNewService({...newService, category: value})}
                      >
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="تعليمية" id="category-education" />
                            <Label htmlFor="category-education">تعليمية</Label>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="طبية" id="category-medical" />
                            <Label htmlFor="category-medical">طبية</Label>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="نفسية" id="category-psychological" />
                            <Label htmlFor="category-psychological">نفسية</Label>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="اجتماعية" id="category-social" />
                            <Label htmlFor="category-social">اجتماعية</Label>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="استشارات" id="category-consultations" />
                            <Label htmlFor="category-consultations">استشارات</Label>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="دعم مادي" id="category-financial" />
                            <Label htmlFor="category-financial">دعم مادي</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>نوع الخدمة</Label>
                      <RadioGroup 
                        value={newService.isPaid}
                        onValueChange={(value) => setNewService({...newService, isPaid: value})}
                      >
                        <div className="flex gap-4">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="free" id="price-free" />
                            <Label htmlFor="price-free">مجانية</Label>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="paid" id="price-paid" />
                            <Label htmlFor="price-paid">مدفوعة</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {newService.isPaid === 'paid' && (
                      <div className="space-y-2">
                        <Label htmlFor="service-price">سعر الخدمة (ل.س)</Label>
                        <Input 
                          id="service-price" 
                          placeholder="أدخل سعر الخدمة" 
                          type="number" 
                          value={newService.price}
                          onChange={(e) => setNewService({...newService, price: e.target.value})}
                        />
                      </div>
                    )}
                  </div>
                  
                  <DialogFooter>
                    <Button type="submit" onClick={handleAddService}>إضافة الخدمة</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {services.length > 0 ? (
              <div className="space-y-4">
                {services.map((service) => (
                  <Card key={service.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{service.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{service.category}</Badge>
                            <span className="text-sm">السعر: {service.price}</span>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">عدد الطلبات: {service.requestsCount}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant={service.isActive ? "outline" : "secondary"} className={service.isActive ? "bg-green-50 text-green-700" : "bg-gray-100"}>
                            {service.isActive ? "نشطة" : "غير نشطة"}
                          </Badge>
                          <div className="flex gap-2 mt-2">
                            <Button variant="outline" size="sm">تعديل</Button>
                            {service.isActive ? (
                              <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">إيقاف</Button>
                            ) : (
                              <Button variant="outline" size="sm" className="text-green-500 border-green-200 hover:bg-green-50">تفعيل</Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لا توجد خدمات مضافة حالياً</p>
                <Button className="mt-4">إضافة خدمة جديدة</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="events" className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">الفعاليات والأنشطة</h2>
              <Button className="flex items-center gap-2">
                <PlusCircle size={16} />
                <span>إضافة فعالية جديدة</span>
              </Button>
            </div>

            {events.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {events.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
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
                      <div className="flex items-center gap-2 mt-1">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">عدد المشاركين: {event.attendees}</span>
                      </div>
                      <div className="mt-4 flex justify-end space-x-2 space-x-reverse">
                        <Button variant="outline" size="sm">تعديل</Button>
                        <Button variant="destructive" size="sm">إلغاء</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لا توجد فعاليات مضافة حالياً</p>
                <Button className="mt-4">إضافة فعالية جديدة</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="jobs" className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">فرص العمل لذوي الاحتياجات الخاصة</h2>
              <Button className="flex items-center gap-2">
                <PlusCircle size={16} />
                <span>إضافة وظيفة جديدة</span>
              </Button>
            </div>

            {jobs.length > 0 ? (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">الموقع: {job.location}</span>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">عدد المتقدمين: {job.applicantsCount}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant={job.isActive ? "outline" : "secondary"} className={job.isActive ? "bg-green-50 text-green-700" : "bg-gray-100"}>
                            {job.isActive ? "نشطة" : "غير نشطة"}
                          </Badge>
                          <div className="flex gap-2 mt-2">
                            <Button variant="outline" size="sm">عرض المتقدمين</Button>
                            <Button variant="outline" size="sm">تعديل</Button>
                            {job.isActive ? (
                              <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">إيقاف</Button>
                            ) : (
                              <Button variant="outline" size="sm" className="text-green-500 border-green-200 hover:bg-green-50">تفعيل</Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لا توجد وظائف مضافة حالياً</p>
                <Button className="mt-4">إضافة وظيفة جديدة</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AssociationDashboard;
