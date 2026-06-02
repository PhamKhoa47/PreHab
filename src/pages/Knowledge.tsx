import { ArrowRight } from "lucide-react";

export function Knowledge() {
  const categories = ["Tất cả", "Phát triển thể chất", "Vận động học đường", "Góc phụ huynh", "Hoạt động trung tâm", "Dinh dưỡng và vận động", "Kinh nghiệm tập luyện"];
  
  const articles = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrKdM7-bLhJY7t3Ui0Hv9g-smWivlk4CWJwEYt3RYExRtsSnAx-OKckWhhoOcVePCO8F9swINsBMhpc2x6WE5s1PMIp_lZCqOUuzud3E0Mo6hTFDrSfeaefWmmBMArcYr_iU0ls5NO_67TtkMQT_Fsqxn4GZsU_Y8RMfHhF1t2kuNM-8P-7BokyqLjIZ764i9Cvl6ev7wmHCZSt8BQyMH-nm8mQ9Kor7uHNI_8K4NXhHCU36i84gRHNgxnK_0izFyGC1h6EGt5294",
      category: "Dinh dưỡng và vận động",
      title: "Thực đơn dinh dưỡng tối ưu cho trẻ sau giờ học",
      desc: "Hướng dẫn chuẩn bị bữa ăn nhẹ khoa học giúp trẻ phục hồi năng lượng nhanh chóng."
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKXGl0sBgz9T-AmN4R2tgMUtvtDV7dzLaZovG8NENXnUMDgp8Nb5RDRvXzJntGyKIWgJ-l5DGrdDK9NQRuc-tI4sQ3rVJMPffBt5vsxlbaQb4D4l164Zh-Xc0jLKF9tU_QR2CGWRJrYFVPKvrluMoq6xz1jne1aUrlXgcmfhdoUVmy2O5Vg0EqPmg6Knme_gx3sARr9U33mehKyRbEEXmOvrKaHFaAfmotH7eqMZzNV4i5ROUS2H8dRx0Wty1xZ4QxBybeTZgrs_4",
      category: "Phát triển thể chất",
      title: "Khắc phục tư thế ngồi học sai lệch ở thanh thiếu niên",
      desc: "Nhận biết sớm và các bài tập chỉnh nha cơ bản giúp bảo vệ cột sống cho con em bạn trong độ tuổi phát triển.",
      span: 2
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1EKsP3QiMuTG0eSH0GcXza3yQDZPoIoCY7ZIg_qAnohqa7egwFDhrLXv9oN7cjB2azCEoX9oHW_792dfcfcEwejOLosdwbUGLQp2qyUIvBMW7x18gg96-SVrTluOwCuRfpt7Bd5IOzE0yWjfwWbaYUIZChSfGmnr1EumES8nay0CWrsDi0smQVOSiNJC67I0fCSSITVhtEz0Hcf6YDPcXsgdy4AKLh9or942oI7j4D5Alpyh1dC9Lsg3sLsyhj6s3rKgrTwE1HmE",
      category: "Hoạt động trung tâm",
      title: "Tổng kết trại hè vận động PreHab 2024",
      desc: "Nhìn lại những khoảnh khắc đáng nhớ và sự tiến bộ vượt bậc của các học viên nhí."
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_p-a2Iw9AJV0-24kbb1LZ6raXQ5fi02XcOk5zHkfwtGx2wKSKQ4Xq885Z_oR6jK0OvypTLci7VoElqOgWXQx6sUMye-oMo1QQwKszed69xgfViPK3ajHVOm5w9zRNKYAuB5kjKWEd1acg6J0LofGSXlvGlTxqZlatj1Odv2AfzfNB8ApEjW0z0z-4-GcsGVwqQmeF30kkZwfLoxGuJ-F0o5RIG7Pnag0QNWn1-jtUqMaek9TFyAm-xLZjMzFXGaVUrxIzlGCSiR0",
      category: "Kinh nghiệm tập luyện",
      title: "Sử dụng dây kháng lực đúng cách tại nhà",
      desc: "Tối ưu hóa hiệu quả bài tập và phòng tránh chấn thương với hướng dẫn chi tiết từ chuyên gia."
    }
  ];

  return (
    <div className="w-full flex-grow flex flex-col pb-stack-lg">
      {/* Header & Categories */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-lg pb-stack-md w-full text-center">
        <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-stack-md">Kiến Thức</h1>
        <div className="flex flex-wrap justify-center gap-base">
          {categories.map((cat, i) => (
            <button key={i} className={`font-label-md px-4 py-2 rounded-full transition-colors ${i === 0 ? "bg-primary-fixed text-on-primary-fixed hover:bg-primary hover:text-on-primary" : "bg-surface-container-high text-on-surface-variant hover:bg-primary-fixed hover:text-on-primary-fixed"}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg w-full">
        <div className="relative rounded-xl overflow-hidden shadow-sm border border-surface-variant bg-surface-container-lowest group cursor-pointer flex flex-col md:flex-row min-h-[400px]">
          <div className="md:w-2/3 relative h-[300px] md:h-auto overflow-hidden">
            <img alt="Featured" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmuIgwi5sn2ENee2FMK7j7SCWg_-a-x5a3rGTzuXoXS215i7MrUuklFeNhjea68Jb0LleypCAPjUXckS7zMNj0BdogYrpJt8uK5a6OfQ-JY7xNnijbyD9Kw-4n2FlFw5lBNAwoHCcCbo8bHLrsqKODhDTVhvofhoNXkWkgA1bckahN_JWRPvVElGaHaUafG7QVMBbbriSqOLv85VwI2uuYXNHjLglPDjQLYHtFMgIwCPwJlSKBPBl3GGOgyE7w9QOMoD_CVKDGlYc" />
          </div>
          <div className="md:w-1/3 p-stack-md flex flex-col justify-center relative z-10">
            <span className="inline-block bg-primary-fixed text-primary font-label-md px-3 py-1 rounded-full mb-stack-sm w-max">Góc phụ huynh</span>
            <h2 className="font-headline-md text-on-surface mb-stack-sm group-hover:text-primary transition-colors">Xây dựng thói quen vận động tích cực cho trẻ từ nhỏ</h2>
            <p className="font-body-lg text-on-surface-variant mb-stack-md line-clamp-3">Khám phá những phương pháp khoa học nhưng gần gũi để giúp trẻ yêu thích việc vận động, phát triển toàn diện cả thể chất lẫn tinh thần trong môi trường gia đình.</p>
            <div className="mt-auto flex items-center gap-2 text-primary font-label-md">
              <span>Đọc tiếp</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg w-full">
        <h3 className="font-headline-md text-on-surface mb-stack-md">Bài Viết Mới Nhất</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[250px]">
          {articles.map((item, i) => (
            <div key={i} className={`bg-surface-container-lowest rounded-xl p-stack-sm shadow-sm border border-surface-variant flex flex-col group cursor-pointer ${item.span ? 'md:row-span-2' : ''}`}>
              <div className={`rounded-lg overflow-hidden mb-stack-sm relative ${item.span ? 'h-full min-h-[250px] md:min-h-[400px]' : 'h-48'}`}>
                <img alt={item.category} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300" src={item.img} />
              </div>
              <span className="text-primary font-label-md mb-2">{item.category}</span>
              <h4 className="font-headline-sm text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">{item.title}</h4>
              <p className="font-body-md text-on-surface-variant line-clamp-2">{item.desc}</p>
              {item.span && (
                <div className="mt-auto flex items-center gap-2 text-primary font-label-md pt-4">
                  <span>Chi tiết</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="bg-tertiary-fixed rounded-xl p-stack-lg flex flex-col md:flex-row items-center justify-between shadow-sm">
          <div className="md:w-1/2 mb-stack-md md:mb-0">
            <h3 className="font-display-lg-mobile text-on-tertiary-fixed mb-2">Nhận thông tin hữu ích</h3>
            <p className="font-body-lg text-on-tertiary-fixed-variant">Đăng ký bản tin để không bỏ lỡ các bài viết mới nhất về chăm sóc sức khỏe gia đình từ chuyên gia PreHab.</p>
          </div>
          <div className="md:w-5/12 w-full flex flex-col sm:flex-row gap-base">
            <div className="flex-grow">
              <input type="email" placeholder="Nhập email của bạn..." className="w-full bg-surface-container-lowest border border-outline rounded-lg px-4 py-3 font-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>
            <button className="bg-primary text-on-primary font-label-md py-3 px-6 rounded-lg hover:bg-primary-container transition-colors shadow-md whitespace-nowrap">Đăng ký</button>
          </div>
        </div>
      </section>
    </div>
  );
}
