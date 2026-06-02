import { MapPin, Phone, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="text-center flex flex-col items-center gap-stack-sm pt-stack-lg px-margin-mobile">
        <h1 className="font-display-lg-mobile md:font-display-lg text-primary">Liên Hệ</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng gia đình bạn trên hành trình chăm sóc sức khỏe chủ động.
        </p>
      </section>

      {/* Bento Grid Contact Layout */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Info Cards (Left Column) */}
        <div className="md:col-span-5 flex flex-col gap-stack-md">
          {[
            { icon: MapPin, title: "Trụ sở chính", lines: ["58 Nguyễn Thái Học", "Vinh, Việt Nam"] },
            { icon: Phone, title: "Hotline", lines: ["0868113844"], link: "tel:0868113844", linkText: "Gọi ngay" },
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-variant flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="bg-primary-fixed p-3 rounded-full text-primary flex-shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-sm text-on-surface mb-2">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-2">
                  {item.lines.map((l, j) => <span key={j}>{l}<br /></span>)}
                </p>
                {item.link && (
                  <a href={item.link} className="inline-flex items-center gap-2 font-label-md text-primary hover:text-primary-container transition-colors">
                    {item.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Socials Card */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-variant flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="bg-primary-fixed p-3 rounded-full text-primary flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline-sm text-on-surface mb-2">Kết nối trực tuyến</h3>
              <p className="font-body-md text-on-surface-variant mb-4">Nhắn tin trực tiếp với chuyên gia qua các nền tảng.</p>
              <div className="flex gap-4">
                <a href="https://zalo.me/0868113844" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#0068FF] text-white rounded-lg font-label-md hover:opacity-90 transition-opacity inline-block text-center">Zalo</a>
                <a href="https://www.facebook.com/pham.duy.cpr" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#0084FF] text-white rounded-lg font-label-md hover:opacity-90 transition-opacity inline-block text-center">Messenger</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (Right Column) */}
        <div className="md:col-span-7 bg-surface-container-lowest p-8 md:p-10 rounded-xl shadow-md border border-surface-variant">
          <h2 className="font-headline-md text-on-surface mb-6">Gửi yêu cầu tư vấn</h2>
          <form className="flex flex-col gap-6">
            <div>
              <label className="block font-label-md text-on-surface mb-2" htmlFor="name">Họ và tên</label>
              <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 outline-none transition-colors" id="name" placeholder="Nhập họ và tên của bạn" type="text" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-md text-on-surface mb-2" htmlFor="phone">Số điện thoại</label>
                <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 outline-none transition-colors" id="phone" placeholder="Nhập số điện thoại" type="tel" />
              </div>
              <div>
                <label className="block font-label-md text-on-surface mb-2" htmlFor="email">Email</label>
                <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 outline-none transition-colors" id="email" placeholder="Nhập địa chỉ email" type="email" />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-on-surface mb-2" htmlFor="service">Dịch vụ quan tâm</label>
              <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 outline-none transition-colors appearance-none" id="service">
                <option value="">Chọn dịch vụ</option>
                <option value="posture">Cải thiện tư thế</option>
                <option value="recovery">Phục hồi chấn thương</option>
                <option value="family">Sức khỏe gia đình</option>
              </select>
            </div>
            <div>
              <label className="block font-label-md text-on-surface mb-2" htmlFor="message">Lời nhắn (Tùy chọn)</label>
              <textarea className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 outline-none transition-colors" id="message" placeholder="Mô tả ngắn gọn vấn đề bạn đang gặp phải" rows={4}></textarea>
            </div>
            <button className="mt-2 w-full bg-primary-container text-on-primary font-label-md py-4 rounded-lg hover:bg-primary transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-200" type="submit">
              Gửi thông tin
            </button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-sm border border-surface-variant relative mt-stack-md max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
        <iframe 
          title="Google Map - 58 Nguyễn Thái Học, Vinh, Việt Nam"
          src="https://www.google.com/maps?q=58+Nguyễn+Thái+Học,+Vinh,+Việt+Nam&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
