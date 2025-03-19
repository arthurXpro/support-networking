
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UserPlus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState('individual');
  const [orgName, setOrgName] = useState('');
  const [orgLicense, setOrgLicense] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // هنا سيتم إضافة كود الاتصال بالخادم في التطبيق الحقيقي
    // لكن الآن سنقوم بمحاكاة عملية التسجيل
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "تم إنشاء الحساب بنجاح",
        description: "مرحباً بك في منصة ذوي الاحتياجات الخاصة",
      });
      navigate('/login');
    }, 1500);
  };
  
  const validateForm = () => {
    if (userType === 'individual' && (!name || !email || !phone || !password || !confirmPassword)) {
      toast({
        title: "خطأ في البيانات",
        description: "يرجى إكمال جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return false;
    }
    
    if (userType === 'organization' && (!orgName || !email || !phone || !password || !confirmPassword || !orgLicense)) {
      toast({
        title: "خطأ في البيانات",
        description: "يرجى إكمال جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return false;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "كلمات المرور غير متطابقة",
        description: "يرجى التأكد من تطابق كلمة المرور وتأكيدها",
        variant: "destructive",
      });
      return false;
    }
    
    if (password.length < 8) {
      toast({
        title: "كلمة المرور قصيرة",
        description: "يجب أن تكون كلمة المرور 8 أحرف على الأقل",
        variant: "destructive",
      });
      return false;
    }
    
    if (!agreeTerms) {
      toast({
        title: "الموافقة على الشروط",
        description: "يرجى الموافقة على الشروط والأحكام للمتابعة",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8 px-4" style={{ direction: 'rtl' }}>
      <div className="w-full max-w-xl">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <Link to="/">
              <h2 className="text-3xl font-bold text-primary">منصة مساعدة</h2>
            </Link>
            <p className="text-gray-600 mt-2">إنشاء حساب جديد</p>
          </div>
          
          <Tabs defaultValue="individual" onValueChange={setUserType}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="individual" className="flex items-center gap-2">
                <UserPlus size={18} />
                <span>فرد</span>
              </TabsTrigger>
              <TabsTrigger value="organization" className="flex items-center gap-2">
                <Users size={18} />
                <span>جمعية/مركز</span>
              </TabsTrigger>
            </TabsList>
            
            <form onSubmit={handleSubmit}>
              <TabsContent value="individual" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم الكامل</Label>
                  <Input
                    id="name"
                    placeholder="أدخل اسمك الكامل"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-individual">البريد الإلكتروني</Label>
                    <Input
                      id="email-individual"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone-individual">رقم الجوال</Label>
                    <Input
                      id="phone-individual"
                      placeholder="05xxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>نوع المستخدم</Label>
                  <RadioGroup defaultValue="beneficiary">
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="beneficiary" id="beneficiary" />
                        <Label htmlFor="beneficiary" className="font-normal">مستفيد</Label>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="guardian" id="guardian" />
                        <Label htmlFor="guardian" className="font-normal">ولي أمر</Label>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="volunteer" id="volunteer" />
                        <Label htmlFor="volunteer" className="font-normal">متطوع</Label>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="donor" id="donor" />
                        <Label htmlFor="donor" className="font-normal">متبرع</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password-individual">كلمة المرور</Label>
                    <div className="relative">
                      <Input
                        id="password-individual"
                        type={showPassword ? "text" : "password"}
                        placeholder="أدخل كلمة المرور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">يجب أن تكون كلمة المرور 8 أحرف على الأقل</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password-individual">تأكيد كلمة المرور</Label>
                    <div className="relative">
                      <Input
                        id="confirm-password-individual"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="أعد إدخال كلمة المرور"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="organization" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="org-name">اسم الجمعية/المركز</Label>
                  <Input
                    id="org-name"
                    placeholder="أدخل اسم الجمعية أو المركز"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-org">البريد الإلكتروني</Label>
                    <Input
                      id="email-org"
                      type="email"
                      placeholder="أدخل البريد الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone-org">رقم التواصل</Label>
                    <Input
                      id="phone-org"
                      placeholder="0xxxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="license">رقم الترخيص</Label>
                  <Input
                    id="license"
                    placeholder="أدخل رقم الترخيص"
                    value={orgLicense}
                    onChange={(e) => setOrgLicense(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">سيتم التحقق من صحة الترخيص قبل تفعيل الحساب</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password-org">كلمة المرور</Label>
                    <div className="relative">
                      <Input
                        id="password-org"
                        type={showPassword ? "text" : "password"}
                        placeholder="أدخل كلمة المرور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">يجب أن تكون كلمة المرور 8 أحرف على الأقل</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password-org">تأكيد كلمة المرور</Label>
                    <div className="relative">
                      <Input
                        id="confirm-password-org"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="أعد إدخال كلمة المرور"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <div className="flex items-center space-x-2 space-x-reverse mt-6">
                <Checkbox 
                  id="terms" 
                  checked={agreeTerms} 
                  onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                />
                <Label htmlFor="terms" className="text-sm font-normal">
                  أوافق على{' '}
                  <Link to="/terms" className="text-primary hover:underline">
                    الشروط والأحكام
                  </Link>{' '}
                  و{' '}
                  <Link to="/privacy" className="text-primary hover:underline">
                    سياسة الخصوصية
                  </Link>
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full mt-6" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                    <span>جاري إنشاء الحساب...</span>
                  </div>
                ) : (
                  <span>إنشاء حساب</span>
                )}
              </Button>
            </form>
          </Tabs>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/" className="text-sm text-gray-600 hover:text-primary">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
