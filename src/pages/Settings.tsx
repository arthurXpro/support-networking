
import { useState } from 'react';
import { User, Bell, Shield, Moon, Sun, Globe, Eye, EyeOff } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSave = () => {
    toast({
      title: "تم حفظ الإعدادات",
      description: "تم حفظ إعداداتك بنجاح",
    });
  };
  
  return (
    <div className="font-sans" style={{ direction: 'rtl' }}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">إعدادات الحساب</h1>
          
          <Tabs defaultValue="profile">
            <div className="flex mb-8">
              <TabsList className="flex-col space-y-2 w-64 ml-8 bg-transparent">
                <TabsTrigger 
                  value="profile" 
                  className="justify-start text-right px-4 py-3 data-[state=active]:bg-primary/10 rounded-lg"
                >
                  <User className="ml-2 h-5 w-5" />
                  <span>الملف الشخصي</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="justify-start text-right px-4 py-3 data-[state=active]:bg-primary/10 rounded-lg"
                >
                  <Bell className="ml-2 h-5 w-5" />
                  <span>الإشعارات</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="justify-start text-right px-4 py-3 data-[state=active]:bg-primary/10 rounded-lg"
                >
                  <Shield className="ml-2 h-5 w-5" />
                  <span>الأمان</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="appearance" 
                  className="justify-start text-right px-4 py-3 data-[state=active]:bg-primary/10 rounded-lg"
                >
                  <Sun className="ml-2 h-5 w-5" />
                  <span>المظهر</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="language" 
                  className="justify-start text-right px-4 py-3 data-[state=active]:bg-primary/10 rounded-lg"
                >
                  <Globe className="ml-2 h-5 w-5" />
                  <span>اللغة</span>
                </TabsTrigger>
              </TabsList>
              
              <div className="flex-1">
                <TabsContent value="profile" className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">معلومات الملف الشخصي</h2>
                  
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-600">أ</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">صورة الملف الشخصي</h3>
                        <p className="text-gray-600 mb-4">اختر صورة لملفك الشخصي. يمكن أن تكون jpg، gif، أو png.</p>
                        <div className="flex gap-2">
                          <Button variant="outline">تحميل صورة</Button>
                          <Button variant="outline" className="text-destructive">حذف</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="firstName">الاسم الأول</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full px-4 py-2 border rounded-md" 
                          defaultValue="أحمد"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="lastName">الاسم الأخير</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full px-4 py-2 border rounded-md" 
                          defaultValue="محمد"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="email">البريد الإلكتروني</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border rounded-md" 
                          defaultValue="ahmed@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="phone">رقم الهاتف</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-2 border rounded-md" 
                          defaultValue="966512345678"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium" htmlFor="bio">نبذة تعريفية</label>
                        <textarea 
                          id="bio" 
                          className="w-full px-4 py-2 border rounded-md h-24" 
                          defaultValue="أنا أحمد، أب لطفل من ذوي الاحتياجات الخاصة، وأبحث عن أفضل الخدمات له."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t flex justify-end">
                      <Button onClick={handleSave}>حفظ التغييرات</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="notifications" className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">إعدادات الإشعارات</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <h3 className="font-medium">إشعارات البريد الإلكتروني</h3>
                        <p className="text-sm text-gray-600">استلام إشعارات عبر البريد الإلكتروني</p>
                      </div>
                      <Switch checked={notifications} onCheckedChange={setNotifications} />
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <h3 className="font-medium">إشعارات الخدمات الجديدة</h3>
                        <p className="text-sm text-gray-600">إعلامك عند إضافة خدمات جديدة تناسب احتياجاتك</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <h3 className="font-medium">إشعارات حالة الطلبات</h3>
                        <p className="text-sm text-gray-600">إعلامك عند تغيير حالة طلباتك</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <h3 className="font-medium">إشعارات الرسائل</h3>
                        <p className="text-sm text-gray-600">إعلامك عند استلام رسائل جديدة</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <h3 className="font-medium">الأخبار والتحديثات</h3>
                        <p className="text-sm text-gray-600">استلام آخر أخبار وتحديثات المنصة</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="mt-8 pt-4 border-t flex justify-end">
                      <Button onClick={handleSave}>حفظ التغييرات</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="security" className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">إعدادات الأمان</h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold">تغيير كلمة المرور</h3>
                      
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <label className="text-sm font-medium" htmlFor="currentPassword">كلمة المرور الحالية</label>
                          <div className="relative">
                            <input 
                              type={showPassword ? "text" : "password"} 
                              id="currentPassword" 
                              className="w-full px-4 py-2 border rounded-md" 
                            />
                            <button 
                              type="button" 
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium" htmlFor="newPassword">كلمة المرور الجديدة</label>
                          <div className="relative">
                            <input 
                              type={showPassword ? "text" : "password"} 
                              id="newPassword" 
                              className="w-full px-4 py-2 border rounded-md" 
                            />
                            <button 
                              type="button" 
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium" htmlFor="confirmPassword">تأكيد كلمة المرور</label>
                          <div className="relative">
                            <input 
                              type={showPassword ? "text" : "password"} 
                              id="confirmPassword" 
                              className="w-full px-4 py-2 border rounded-md" 
                            />
                            <button 
                              type="button" 
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">المصادقة الثنائية</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">تفعيل المصادقة الثنائية</p>
                          <p className="text-sm text-gray-600">تأمين حسابك بطبقة إضافية من الحماية</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">جلسات تسجيل الدخول</h3>
                      <p className="text-sm text-gray-600 mb-4">أنت حالياً مسجل الدخول على هذا الجهاز:</p>
                      
                      <div className="bg-gray-50 p-4 rounded-md mb-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">متصفح كروم - ويندوز 10</p>
                            <p className="text-xs text-gray-500">آخر نشاط: قبل 5 دقائق</p>
                          </div>
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">نشط حالياً</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="text-destructive">تسجيل الخروج من جميع الأجهزة الأخرى</Button>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t flex justify-end">
                      <Button onClick={handleSave}>حفظ التغييرات</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="appearance" className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">إعدادات المظهر</h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-medium">الوضع المظلم</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">تفعيل الوضع المظلم</p>
                        <div className="flex items-center">
                          <Sun className="h-5 w-5 text-gray-500 ml-2" />
                          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                          <Moon className="h-5 w-5 text-gray-500 mr-2" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 space-y-3">
                      <h3 className="font-medium">حجم الخط</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="range" min="1" max="3" defaultValue="2" className="w-full" />
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>صغير</span>
                          <span>متوسط</span>
                          <span>كبير</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 space-y-3">
                      <h3 className="font-medium">سمة الألوان</h3>
                      <div className="grid grid-cols-4 gap-4">
                        <div className="h-20 bg-blue-500 rounded-md cursor-pointer ring ring-offset-2 ring-offset-white"></div>
                        <div className="h-20 bg-green-500 rounded-md cursor-pointer"></div>
                        <div className="h-20 bg-purple-500 rounded-md cursor-pointer"></div>
                        <div className="h-20 bg-orange-500 rounded-md cursor-pointer"></div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t flex justify-end">
                      <Button onClick={handleSave}>حفظ التغييرات</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="language" className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">إعدادات اللغة</h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-medium">لغة العرض</h3>
                      <select className="w-full px-4 py-2 border rounded-md">
                        <option value="ar">العربية</option>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="es">Español</option>
                      </select>
                    </div>
                    
                    <div className="border-t pt-4 space-y-3">
                      <h3 className="font-medium">التنسيق الإقليمي</h3>
                      <select className="w-full px-4 py-2 border rounded-md">
                        <option value="sa">المملكة العربية السعودية</option>
                        <option value="ae">الإمارات العربية المتحدة</option>
                        <option value="eg">مصر</option>
                        <option value="kw">الكويت</option>
                        <option value="bh">البحرين</option>
                      </select>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t flex justify-end">
                      <Button onClick={handleSave}>حفظ التغييرات</Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Settings;
