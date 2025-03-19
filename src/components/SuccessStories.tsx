
import { useState } from 'react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

// Sample success stories data
const successStoriesData = [
  {
    id: 1,
    name: "أحمد محمد",
    age: 12,
    story: "بفضل برنامج التأهيل المتكامل الذي قدمته جمعية الرعاية، تمكن أحمد من التغلب على صعوبات التعلم التي كان يعاني منها وأصبح من المتفوقين في فصله.",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
  },
  {
    id: 2,
    name: "سارة عبدالله",
    age: 9,
    story: "بعد ستة أشهر من العلاج الطبيعي المتخصص في مركز النور، تمكنت سارة من المشي بمساعدة بسيطة، بعد أن كان الأطباء يستبعدون إمكانية تحسنها.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
  },
  {
    id: 3,
    name: "يوسف خالد",
    age: 16,
    story: "التحق يوسف ببرنامج الدعم النفسي والاجتماعي في مؤسسة الأمل، وخلال عام واحد تغلب على الانطواء والقلق الاجتماعي وأصبح أكثر ثقة بنفسه.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % successStoriesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + successStoriesData.length) % successStoriesData.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary/30" id="success-stories">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-secondary text-primary font-semibold px-4 py-2 rounded-full mb-4">
            قصص نجاح
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            قصص ملهمة من مستفيدي خدماتنا
          </h2>
          <p className="text-gray-600 text-lg">
            نفتخر بمشاركة تجارب حقيقية لأشخاص غيرت حياتهم بفضل الخدمات المقدمة من خلال منصتنا والجمعيات المتخصصة.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="glass-card p-8 md:p-12 rounded-2xl relative z-10">
            <div className="absolute top-6 right-8 text-primary/20">
              <Quote size={60} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src={successStoriesData[currentIndex].image} 
                      alt={successStoriesData[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                    {successStoriesData[currentIndex].age} سنة
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-8">
                <h3 className="text-2xl font-bold mb-4">{successStoriesData[currentIndex].name}</h3>
                <p className="text-gray-600 text-lg mb-6">
                  "{successStoriesData[currentIndex].story}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {successStoriesData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                      aria-label="Previous story"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                      aria-label="Next story"
                    >
                      <ChevronLeft size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-16 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
