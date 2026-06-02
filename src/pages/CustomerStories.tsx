import { Heart, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CustomerStories() {
  return (
    <div className="w-full flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Family walking" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTK-FTH5NsPD7ic3A3u_MDPbftWtg4ZNsoJIzT0DjzOaEFXgqlitrOaq9NsPo8Au7NMs9rjiKhyG-f_g9tdcCy8zS44Es4463aMIC8JXr8FV0JxkR9Zud7-4ywJcFRT1Gi4Gwzj1PQEHhox3-_rwL86kyeq4YgGLRelQ2IuF0xRp7EtOGGTZ-6O7DehLL3OjvPUbBHya0Fl5ZzgILylkG_knqjECbP_RugM0qClgVdT_7JsOcePkgH1RUgB-sZGKDzxTXogAxJ0Gs" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/60 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-start pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed/30 text-primary-container mb-stack-md backdrop-blur-sm border border-primary-fixed">
            <Heart className="w-4 h-4" />
            <span className="font-label-md">Hành trình sức khỏe</span>
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface max-w-2xl mb-stack-md text-balance leading-tight">
            Câu Chuyện Khách Hàng
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl mb-stack-lg leading-relaxed">
            Khám phá những trải nghiệm thực tế và sự thay đổi tích cực từ các gia đình đã đồng hành cùng PreHab trong việc xây dựng thói quen vận động chủ động.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Main */}
          <div className="md:col-span-8 rounded-2xl overflow-hidden relative group ambient-shadow h-[400px] md:h-[600px]">
            <img alt="Story highlight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRfGZN8NOAnXG_kAEX6D_e76JgJNG0jVEBEuO9KqPNyCykMZGoOE-TwuPPOmSH79QwOS3PLzFCNsxVbrlXEdoOCTgaS8HMWuFQnjAXtzrYGAUSCryVkEtaYTTMqV3TChh6MstdKNGri9luIvXUmD4An-MO-HZlenF6hxIImH_ijhR5OZdF_5LAC4SgV-0EBoBHyfISX2bUWkG0XfQxIzqJLtg7ayo9AhAN9wEqcjJaKF4mhd7vAsiQND4WBRY8PdY-Ep-drjFZOoY" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-surface/80 backdrop-blur-md border border-white/20">
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-primary-container text-white px-3 py-1 rounded-full font-label-md text-xs">Vóc dáng Kids</span>
                <span className="font-body-md text-sm text-secondary">Gia đình bé Bin, Hà Nội</span>
              </div>
              <h3 className="font-headline-sm text-on-surface mb-2">
                "Từ một cậu bé nhút nhát, Bin giờ đã tự tin và năng động hơn hẳn."
              </h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">
                Sau 3 tháng tham gia khóa học chỉnh sửa tư thế và vận động cơ bản, không chỉ thể lực của Bin cải thiện mà tinh thần cũng vui vẻ, cởi mở hơn rất nhiều.
              </p>
            </div>
          </div>
          
          {/* Secondary */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            <div className="bg-surface-container-lowest rounded-2xl p-6 ambient-shadow flex-1 flex flex-col justify-center border border-surface-variant/50 hover:border-primary-fixed transition-colors">
              <div className="text-primary-container mb-4">
                <Quote className="w-10 h-10 fill-current" />
              </div>
              <p className="font-body-md text-on-surface italic mb-6">
                "Bài tập của PreHab rất thiết thực, cả nhà có thể tập cùng nhau mỗi tối. Cảm giác gắn kết gia đình tuyệt vời."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed overflow-hidden">
                  <img alt="Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4gJ_wNKErOykl1liZxcj8OCdg6LMmYr-JfqXSPOTFfjib0mjfIdb0Qe1zpemL3tEb5_uOdUvtFfXmKuZIDSrgAgEB4L9Clf9v6mSQGoShuwa-GFiu7LxBCx6pBiBoBDO_Ne77cEoXHGBu_5KAzO5u59PJk3qCkXWs29wKAfhq67gUqUbcoQv4T-ileNIoWSvTkSY6PRAVWGeBclHadvN2uQtJKatp5e_OdQuO8amDi5KzCDZcediVHPbCsCcqYFVrDNZzeEJEPHs" />
                </div>
                <div>
                  <p className="font-label-md text-on-surface">Chị Lan Anh</p>
                  <p className="text-xs text-secondary">Học viên Yoga Family</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-fixed rounded-2xl p-6 ambient-shadow flex-1 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-10 transform group-hover:scale-110 transition-transform duration-500 text-primary">
                <Heart className="w-32 h-32 fill-current" />
              </div>
              <div className="relative z-10">
                <h4 className="font-headline-sm text-on-primary-fixed-variant mb-2">Phục hồi toàn diện</h4>
                <p className="font-body-md text-on-surface-variant mb-4">
                  "Chứng đau lưng của tôi đã thuyên giảm rõ rệt nhờ lộ trình cá nhân hóa."
                </p>
                <Link to="/cau-chuyen-khach-hang" className="inline-flex items-center text-primary font-label-md hover:text-primary-container transition-colors">
                  Đọc câu chuyện <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
