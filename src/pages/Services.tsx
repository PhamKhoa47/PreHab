import { CheckCircle, Activity, TrendingUp, Dumbbell, GraduationCap, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Services() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="w-full bg-surface-container-lowest pt-stack-lg pb-stack-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-fixed/20 to-transparent pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md mb-stack-sm tracking-widest uppercase">
            Phát triển toàn diện
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface mb-stack-md">Dịch Vụ của PreHab</h1>
          <p className="font-body-lg text-secondary max-w-3xl mx-auto">
            Các chương trình được thiết kế chuyên biệt bởi các chuyên gia, kết hợp giữa y học thể thao và khoa học vận động, giúp trẻ phát triển thể chất một cách tối ưu và an toàn nhất.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Card 1: Featured */}
          <article className="col-span-1 md:col-span-2 lg:col-span-2 bg-surface-container-lowest rounded-xl ambient-shadow overflow-hidden flex flex-col md:flex-row group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img alt="Huấn luyện cá nhân" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2TpjFMlpL0U586A7fgbT1N31Qz391XFYwgcUM4peRLrfQVRPEE96f-8tDUB7SkQIyHNXDyK5sz7nth6m-38JuWj-n5s1ABYUkkep9SO8P9yFBlzsHTbp5k0vekP3thJhOhZ3ZipuiwIXxAkOxq-TOMPt7MXsIjL04IfIKMh8MV0cLkHa7ehBvcrOnBtk92Dkyc4YtZCmsr1nun3LLCsQCwaSKjTs7-oWoz4cgx88sVwPF0KADLn9Ot0dMWtosEOGk52Vj1YBB2h4" />
            </div>
            <div className="w-full md:w-1/2 p-stack-md flex flex-col justify-between">
              <div>
                <div className="inline-block bg-primary text-on-primary font-label-md px-3 py-1 rounded-full mb-stack-sm">Nổi bật</div>
                <h2 className="font-headline-md text-primary mb-stack-sm group-hover:text-primary-container transition-colors">Huấn luyện cá nhân & Đánh giá vận động</h2>
                <p className="font-body-md text-on-surface-variant mb-stack-md line-clamp-3">
                  Phân tích chi tiết hệ cơ xương khớp, tư thế và mô hình vận động của trẻ. Từ đó, xây dựng lộ trình huấn luyện 1-kèm-1 chuyên biệt giúp khắc phục điểm yếu và phát huy tối đa tiềm năng.
                </p>
                <div className="mb-stack-md">
                  <h3 className="font-label-md text-on-surface mb-stack-sm uppercase tracking-wider">Lợi ích chính:</h3>
                  <ul className="space-y-2">
                    {["Phát hiện sớm sai lệch tư thế.", "Giáo án cá nhân hóa 100%.", "Theo dõi sát sao bởi chuyên gia y học thể thao."].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                        <span className="font-body-md text-on-surface">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link to="/huan-luyen-ca-nhan" className="self-start mt-stack-sm flex items-center gap-2 text-primary font-label-md hover:text-on-primary-fixed-variant transition-colors group/btn">
                Tìm hiểu chi tiết lộ trình <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>

          {/* Cards 2-4 */}
          {[
            { icon: Activity, title: "Chương trình vận động trẻ em", desc: "Lớp học nhóm nhỏ tập trung vào việc xây dựng nền tảng thể lực, phản xạ và kỹ năng phối hợp động tác thông qua các trò chơi vận động có chủ đích.", btn: "Đăng ký trải nghiệm" },
            { icon: TrendingUp, title: "Chương trình phát triển thể chất", desc: "Lộ trình dài hạn định hướng phát triển chiều cao, sức bền và hệ tim mạch khỏe mạnh, phù hợp cho trẻ trong giai đoạn vàng tăng trưởng.", btn: "Nhận tư vấn lộ trình" },
            { icon: Dumbbell, title: "Tăng cường sức mạnh và linh hoạt", desc: "Các bài tập chuyên sâu giúp củng cố sức mạnh cơ cốt lõi (core), cải thiện biên độ khớp, ngăn ngừa chấn thương khi tham gia thể thao.", btn: "Tìm hiểu thêm" },
          ].map((item, i) => (
            <article key={i} className="bg-surface-container-lowest rounded-xl ambient-shadow p-stack-md flex flex-col group hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-primary-fixed">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-stack-sm text-primary">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-headline-sm text-on-surface mb-stack-sm group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="font-body-md text-on-surface-variant mb-stack-md flex-grow">{item.desc}</p>
              <div className="pt-stack-sm border-t border-surface-variant mt-auto">
                <button className="w-full py-2 text-center text-primary border border-primary rounded-lg font-label-md hover:bg-primary-fixed transition-colors">{item.btn}</button>
              </div>
            </article>
          ))}

          {/* Call to Action Panel */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-primary rounded-xl ambient-shadow p-stack-md md:p-margin-desktop flex flex-col md:flex-row items-center justify-between text-on-primary overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-on-primary-fixed-variant rounded-full opacity-30 blur-2xl"></div>
            <div className="relative z-10 w-full md:w-2/3 mb-stack-md md:mb-0">
              <h3 className="font-headline-md mb-stack-sm">Bạn chưa biết chọn chương trình nào?</h3>
              <p className="font-body-md opacity-90 mb-stack-md">Hãy để các chuyên gia của chúng tôi tư vấn trực tiếp và xây dựng lộ trình vận động phù hợp nhất với thể trạng của con bạn.</p>
              <ul className="flex flex-wrap gap-4 mb-stack-md">
                <li className="flex items-center gap-1 font-label-md bg-white/20 px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4" /> Miễn phí tư vấn 1-1
                </li>
                <li className="flex items-center gap-1 font-label-md bg-white/20 px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4" /> Đội ngũ HLV người Việt Nam
                </li>
              </ul>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <button className="w-full md:w-auto bg-surface text-primary font-label-md px-8 py-4 rounded-lg hover:bg-surface-bright transition-colors shadow-lg whitespace-nowrap">
                Tư vấn lộ trình vận động
              </button>
            </div>
          </div>

          {/* Cards 6-7 */}
          {[
            { icon: GraduationCap, title: "Hoạt động thể chất học đường", desc: "Hợp tác cùng các trường học triển khai các buổi ngoại khóa về vận động an toàn, giáo dục tư thế đúng khi ngồi học và mang balo.", btn: "Liên hệ hợp tác" },
            { icon: Users, title: "Chương trình vận động theo độ tuổi", desc: "Phân chia nhóm lớp dựa trên đặc điểm sinh lý học (Mầm non, Tiểu học, Trung học) để tối ưu hóa bài tập và cường độ.", btn: "Xem lịch học" },
          ].map((item, i) => (
            <article key={i} className="bg-surface-container-lowest rounded-xl ambient-shadow p-stack-md flex flex-col group hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-primary-fixed">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-stack-sm text-primary">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-headline-sm text-on-surface mb-stack-sm group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="font-body-md text-on-surface-variant mb-stack-md flex-grow">{item.desc}</p>
              <div className="pt-stack-sm border-t border-surface-variant mt-auto">
                <button className="w-full py-2 text-center text-primary border border-primary rounded-lg font-label-md hover:bg-primary-fixed transition-colors">{item.btn}</button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
