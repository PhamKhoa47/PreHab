import { Rocket, Eye, Activity, Users, Smile, MonitorPlay, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-stack-lg pb-stack-lg md:pt-24 md:pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col items-center text-center">
        <div className="w-24 h-24 md:w-32 md:h-32 mb-stack-md rounded-full overflow-hidden border-4 border-surface-container-lowest shadow-sm">
          <img alt="PreHab Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS75-xtW-mekSXEvs5unZPZmL55dCDLiBjsDyxHqEqp8maNCsL29d_Cygmqjn_9ZQ_wWVZbl64eUfBR0O6XYJron8tc2YQFjm7Tj1MI4c0DxeIRDqFQzWHRMG3rmBi1AYche9KxctDY4UTfozDvtSc9cEJ9Welmw1N4VdQf1KEZTnfVEtfuGF2Y-lsxqKZhVFmi8PPP0l7RiTdcwcYGxZB9CNzJESs8WjvKThRykNcUxw2jIWx-HCIYKt1alsWJApspyV4x3kY7AI" />
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface mb-stack-md max-w-3xl">
          Giới Thiệu PreHab
        </h1>
        <p className="font-body-lg text-secondary max-w-2xl leading-relaxed">
          PreHab là trung tâm tiên phong kiến tạo hệ sinh thái vận động chủ động và phục hồi chức năng toàn diện. Chúng tôi mang đến các giải pháp chăm sóc sức khỏe thể chất chuyên nghiệp, đạt chuẩn y khoa cho mọi độ tuổi.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-surface-container flex flex-col items-start hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/30 rounded-bl-full -mr-16 -mt-16 z-0"></div>
            <div className="w-12 h-12 bg-primary-container text-on-primary rounded-lg flex items-center justify-center mb-6 z-10">
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="font-headline-md text-on-surface mb-4 z-10">Sứ Mệnh</h2>
            <p className="font-body-md text-secondary leading-relaxed z-10">
              Kiến tạo nền tảng sức khỏe vững chắc thông qua các chương trình can thiệp vận động chuyên sâu và cá nhân hóa. Chúng tôi cam kết nâng cao chất lượng sống và tối ưu hóa hiệu suất thể chất cho từng khách hàng.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-surface-container flex flex-col items-start hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed/40 rounded-bl-full -mr-16 -mt-16 z-0"></div>
            <div className="w-12 h-12 bg-tertiary-container text-on-tertiary-container rounded-lg flex items-center justify-center mb-6 z-10">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-headline-md text-on-surface mb-4 z-10">Tầm Nhìn</h2>
            <p className="font-body-md text-secondary leading-relaxed z-10">
              Trở thành thương hiệu hàng đầu và đáng tin cậy nhất tại Việt Nam trong lĩnh vực chăm sóc sức khỏe thể chất dự phòng, thiết lập các tiêu chuẩn mới về chuyên môn và dịch vụ.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-stack-lg bg-surface-container-low px-margin-mobile md:px-margin-desktop w-full">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-md text-on-surface mb-2">Giá Trị Cốt Lõi</h2>
            <p className="font-body-md text-secondary">Những nguyên tắc định hình chất lượng dịch vụ chuyên nghiệp của chúng tôi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm md:col-span-2 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex-shrink-0 flex items-center justify-center text-primary">
                <Activity className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-headline-sm text-on-surface mb-2">Khoa Học & Chuyên Môn</h3>
                <p className="font-body-md text-secondary">
                  Mọi phác đồ can thiệp và chương trình tập luyện đều được thiết kế, kiểm chứng dựa trên các nghiên cứu y học thể thao tiên tiến và vật lý trị liệu hiện đại.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center text-on-surface-variant mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-headline-sm text-on-surface mb-2">Cá Nhân Hóa</h3>
              <p className="font-body-md text-secondary">Lộ trình được tinh chỉnh chuyên biệt, đáp ứng chính xác tình trạng thể chất và mục tiêu của từng khách hàng.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-outline-variant rounded-full flex items-center justify-center text-on-surface mb-4">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="font-headline-sm text-on-surface mb-2">Tận Tâm & Uy Tín</h3>
              <p className="font-body-md text-secondary">Sự an toàn và hài lòng của khách hàng là kim chỉ nam trong mọi hoạt động chuyên môn.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm md:col-span-2 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-tertiary-fixed rounded-full flex-shrink-0 flex items-center justify-center text-tertiary">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-headline-sm text-on-surface mb-2">Phát Triển Bền Vững</h3>
                <p className="font-body-md text-secondary">
                  Chúng tôi tập trung vào sức khỏe dài hạn, hỗ trợ khách hàng xây dựng thói quen vận động cấu trúc và duy trì hiệu suất thể chất tối ưu theo thời gian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-stack-lg">
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
            <img alt="Our Professional Story" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-headline-md text-on-surface mb-stack-sm">Câu Chuyện Của Chúng Tôi</h2>
          <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
          <p className="font-body-md text-secondary mb-4 leading-relaxed">
            Khởi nguồn từ những trăn trở của đội ngũ y bác sĩ, chuyên gia vật lý trị liệu và huấn luyện viên thể thao chuyên nghiệp khi nhận thấy thực trạng chấn thương, bệnh lý cơ xương khớp ngày càng gia tăng ở mọi lứa tuổi – từ dân văn phòng, vận động viên đến người cao tuổi.
          </p>
          <p className="font-body-md text-secondary leading-relaxed mb-8">
            PreHab ra đời với triết lý "Phòng ngừa hơn điều trị" (Prehabilitation). Chúng tôi không chỉ cung cấp không gian tập luyện đẳng cấp, mà còn xây dựng một quy trình khám phá, chẩn đoán và can thiệp vận động chuyên sâu, khép kín. Sự kết hợp giữa máy móc hiện đại và đội ngũ chuyên gia giàu kinh nghiệm giúp PreHab trở thành đối tác sức khỏe tin cậy của bạn.
          </p>
          <Link to="/lien-he" className="flex items-center gap-2 text-primary font-label-md hover:text-primary-container transition-colors group">
            <span>Tìm hiểu về đội ngũ chuyên gia</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
