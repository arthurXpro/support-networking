
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Building2, 
  FileText, 
  BarChart3, 
  Settings, 
  Bell, 
  Search, 
  User, 
  LogOut 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // فرضية أن المشرف قد سجل دخوله بالفعل

  // إذا لم يكن المشرف مسجلاً الدخول، فسيتم توجيهه إلى صفحة تسجيل الدخول
  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  const handleAction = (actionName: string) => {
    toast({
      title: `تم تنفيذ الإجراء: ${actionName}`,
      description: "تم تنفيذ الإجراء بنجاح",
    });
  };

  return (
    <div className="font-sans" style={{ direction: 'rtl' }}>
      <Navbar />
      
      <div className="container px-4 py-8 mx-auto mt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 p-4 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-lg font-bold text-white">م</span>
                </div>
                <div>
                  <h3 className="font-bold">محمد عبد الله</h3>
                  <p className="text-sm text-gray-500">مشرف النظام</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start mb-1">
                  <BarChart3 className="ml-2 h-5 w-5" />
                  <span>لوحة التحكم</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start mb-1">
                  <Users className="ml-2 h-5 w-5" />
                  <span>المستخدمون</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start mb-1">
                  <Building2 className="ml-2 h-5 w-5" />
                  <span>الجمعيات</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start mb-1">
                  <FileText className="ml-2 h-5 w-5" />
                  <span>التقارير</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start mb-1">
                  <Settings className="ml-2 h-5 w-5" />
                  <span>الإعدادات</span>
                </Button>
                <Button variant="destructive" className="w-full justify-start mt-8" onClick={() => setIsLoggedIn(false)}>
                  <LogOut className="ml-2 h-5 w-5" />
                  <span>تسجيل الخروج</span>
                </Button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-3xl font-bold">لوحة تحكم المشرف</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">المستخدمون</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,247</div>
                  <p className="text-xs text-gray-500">زيادة 12% عن الشهر الماضي</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">الجمعيات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">85</div>
                  <p className="text-xs text-gray-500">زيادة 4% عن الشهر الماضي</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">الخدمات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">342</div>
                  <p className="text-xs text-gray-500">زيادة 8% عن الشهر الماضي</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">الطلبات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">583</div>
                  <p className="text-xs text-gray-500">زيادة 16% عن الشهر الماضي</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="users">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="users">المستخدمون</TabsTrigger>
                <TabsTrigger value="associations">الجمعيات</TabsTrigger>
                <TabsTrigger value="requests">الطلبات</TabsTrigger>
              </TabsList>
              
              <TabsContent value="users" className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">إدارة المستخدمين</h2>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input type="text" placeholder="بحث عن مستخدم" className="pr-10 pl-4 py-2 border rounded-md w-64" />
                    </div>
                    <Button onClick={() => handleAction("إضافة مستخدم جديد")}>إضافة مستخدم</Button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-right border-b">اسم المستخدم</th>
                        <th className="py-3 px-4 text-right border-b">البريد الإلكتروني</th>
                        <th className="py-3 px-4 text-right border-b">نوع الإعاقة</th>
                        <th className="py-3 px-4 text-right border-b">تاريخ التسجيل</th>
                        <th className="py-3 px-4 text-right border-b">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">أحمد محمد</td>
                          <td className="py-3 px-4">ahmed@example.com</td>
                          <td className="py-3 px-4">حركية</td>
                          <td className="py-3 px-4">12/05/2023</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => handleAction("عرض التفاصيل")}>عرض</Button>
                              <Button size="sm" variant="outline" onClick={() => handleAction("تعديل المستخدم")}>تعديل</Button>
                              <Button size="sm" variant="destructive" onClick={() => handleAction("حذف المستخدم")}>حذف</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-gray-500">عرض 1-5 من 120 مستخدم</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">السابق</Button>
                    <Button variant="outline" size="sm">التالي</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="associations" className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">إدارة الجمعيات</h2>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input type="text" placeholder="بحث عن جمعية" className="pr-10 pl-4 py-2 border rounded-md w-64" />
                    </div>
                    <Button onClick={() => handleAction("إضافة جمعية جديدة")}>إضافة جمعية</Button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-right border-b">اسم الجمعية</th>
                        <th className="py-3 px-4 text-right border-b">المنطقة</th>
                        <th className="py-3 px-4 text-right border-b">رقم الترخيص</th>
                        <th className="py-3 px-4 text-right border-b">التقييم</th>
                        <th className="py-3 px-4 text-right border-b">الحالة</th>
                        <th className="py-3 px-4 text-right border-b">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4].map((i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">جمعية رعاية ذوي الاحتياجات الخاصة</td>
                          <td className="py-3 px-4">الرياض</td>
                          <td className="py-3 px-4">123456</td>
                          <td className="py-3 px-4">4.8</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">نشطة</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => handleAction("عرض التفاصيل")}>عرض</Button>
                              <Button size="sm" variant="outline" onClick={() => handleAction("تعديل الجمعية")}>تعديل</Button>
                              <Button size="sm" variant="destructive" onClick={() => handleAction("تعليق الجمعية")}>تعليق</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-gray-500">عرض 1-4 من 85 جمعية</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">السابق</Button>
                    <Button variant="outline" size="sm">التالي</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="requests" className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">إدارة الطلبات</h2>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input type="text" placeholder="بحث عن طلب" className="pr-10 pl-4 py-2 border rounded-md w-64" />
                    </div>
                    <Button onClick={() => handleAction("تصدير التقرير")}>تصدير التقرير</Button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-right border-b">رقم الطلب</th>
                        <th className="py-3 px-4 text-right border-b">المستخدم</th>
                        <th className="py-3 px-4 text-right border-b">الجمعية</th>
                        <th className="py-3 px-4 text-right border-b">الخدمة</th>
                        <th className="py-3 px-4 text-right border-b">التاريخ</th>
                        <th className="py-3 px-4 text-right border-b">الحالة</th>
                        <th className="py-3 px-4 text-right border-b">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">#{1000 + i}</td>
                          <td className="py-3 px-4">محمد سعيد</td>
                          <td className="py-3 px-4">جمعية رعاية ذوي الاحتياجات الخاصة</td>
                          <td className="py-3 px-4">جلسات علاج طبيعي</td>
                          <td className="py-3 px-4">15/06/2023</td>
                          <td className="py-3 px-4">
                            {i % 3 === 0 ? (
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">مكتمل</span>
                            ) : i % 3 === 1 ? (
                              <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">قيد المعالجة</span>
                            ) : (
                              <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">جديد</span>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => handleAction("عرض التفاصيل")}>عرض</Button>
                              <Button size="sm" variant="outline" onClick={() => handleAction("تحديث الحالة")}>تحديث</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-gray-500">عرض 1-5 من 583 طلب</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">السابق</Button>
                    <Button variant="outline" size="sm">التالي</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
