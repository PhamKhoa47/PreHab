import { CalendarDays, Route, LineChart, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function PersonalTraining() {
  return (
    <div className="w-full flex-grow">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center mb-stack-lg">
        <div className="order-2 lg:order-1">
          <span className="inline-block px-4 py-1 rounded-full bg-tertiary-fixed text-primary font-label-md mb-stack-sm">
            Dịch vụ cao cấp
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-stack-md">
            Huấn Luyện Cá Nhân
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-stack-md max-w-xl">
            Lộ trình được xây dựng phù hợp với từng học viên nhằm hỗ trợ quá trình rèn luyện hiệu quả và bền vững. Chúng tôi tập trung vào sự phát triển toàn diện của cơ thể trong một môi trường chuyên nghiệp.
          </p>
          <Link to="/lien-he" className="bg-primary hover:bg-primary-container text-on-primary font-label-md px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            <CalendarDays className="w-5 h-5" />
            Đặt lịch đánh giá
          </Link>
        </div>
        <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-sm h-[400px] md:h-[500px]">
          <img alt="Personal Training" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2TpjFMlpL0U586A7fgbT1N31Qz391XFYwgcUM4peRLrfQVRPEE96f-8tDUB7SkQIyHNXDyK5sz7nth6m-38JuWj-n5s1ABYUkkep9SO8P9yFBlzsHTbp5k0vekP3thJhOhZ3ZipuiwIXxAkOxq-TOMPt7MXsIjL04IfIKMh8MV0cLkHa7ehBvcrOnBtk92Dkyc4YtZCmsr1nun3LLCsQCwaSKjTs7-oWoz4cgx88sVwPF0KADLn9Ot0dMWtosEOGk52Vj1YBB2h4" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent"></div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
        <div className="text-center mb-stack-md">
          <h2 className="font-headline-md text-primary mb-2">Quy trình rèn luyện</h2>
          <p className="font-body-md text-secondary">Hành trình cá nhân hóa cho từng mục tiêu thể chất</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { icon: CalendarDays, title: "Đánh giá ban đầu", desc: "Phân tích chuyên sâu về tư thế, khả năng vận động và tiền sử chấn thương để hiểu rõ tình trạng cơ thể." },
            { icon: Route, title: "Xây dựng lộ trình", desc: "Thiết kế chương trình tập luyện cá nhân hóa, tối ưu hóa theo mục tiêu và khả năng thích ứng của học viên.", mt: "lg:mt-8" },
            { icon: LineChart, title: "Theo dõi tiến trình", desc: "Đánh giá định kỳ sự thay đổi về thể chất, điều chỉnh bài tập kịp thời để đảm bảo hiệu quả liên tục.", mt: "lg:mt-16" },
            { icon: Users, title: "Đồng hành cùng phụ huynh", desc: "Cập nhật thường xuyên tình hình tập luyện của trẻ em, phối hợp cùng gia đình xây dựng lối sống lành mạnh.", mt: "lg:mt-24" }
          ].map((step, i) => (
            <div key={i} className={`bg-surface-container-lowest p-stack-md rounded-xl shadow-sm border border-surface-variant hover:shadow-md transition-all duration-300 group mt-0 ${step.mt || ''}`}>
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-stack-sm group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sm text-on-surface mb-2">{step.title}</h3>
              <p className="font-body-md text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
